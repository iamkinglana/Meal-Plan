import { useState } from 'react';
import { firestore } from './firebase/firebase';
// import { Firestore } from 'firebase/firestore';

const Feedback = ({ mealId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await firestore.collection('feedback').add({
      mealId,
      rating,
      comment,
      timestamp: new Date(),
    });
    alert('Feedback submitted');
  };

  return (
    <div>
      <h3>Feedback</h3>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (1-5)" />
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment"></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Feedback;
