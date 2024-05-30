import { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        firestore.collection('users').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            setPreferences(doc.data().preferences);
          }
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSavePreferences = async () => {
    if (user) {
      await firestore.collection('users').doc(user.uid).set({ preferences });
      alert('Preferences saved');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} placeholder="Preferences" />
          <button onClick={handleSavePreferences}>Save Preferences</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
