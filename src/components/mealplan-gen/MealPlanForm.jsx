// src/components/MealPlanForm.js
import  { useState } from 'react';
import axios from 'axios';

const MealPlanForm = () => {
  const [diet, setDiet] = useState('');
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);
  const [numMeals, setNumMeals] = useState(3);

  const handleGenerateMealPlan = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-meal-plan', {
        diet,
        calories,
        numMeals,
      });
      setMeals(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Generate Meal Plan</h2>
      <input type="text" value={diet} onChange={(e) => setDiet(e.target.value)} placeholder="Diet Preferences" />
      <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Daily Calorie Target" />
      <input type="number" value={numMeals} onChange={(e) => setNumMeals(e.target.value)} placeholder="Number of Meals per Day" />
      <button onClick={handleGenerateMealPlan}>Generate</button>
      <div>
        {meals.map((meal, index) => (
          <div key={index}>
            <h3>Meal {index + 1}</h3>
            <p>{meal.name}</p>
            <p>{meal.calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanForm;
