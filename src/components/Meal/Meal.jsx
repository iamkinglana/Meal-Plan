// src/components/Meal.js
// import React from 'react';

const Meal = ({ meal, onSwap }) => {
  return (
    <div>
      <h3>{meal.name}</h3>
      <p>Calories: {meal.calories}</p>
      <button onClick={() => onSwap(meal.id)}>Swap Meal</button>
    </div>
  );
};

export default Meal;
