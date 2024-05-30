import { useState } from 'react';

const ShoppingList = ({ meals }) => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleToggleItem = (item) => {
    setPurchasedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const shoppingItems = meals.reduce((list, meal) => {
    meal.ingredients.forEach((item) => {
      if (!list.includes(item)) list.push(item);
    });
    return list;
  }, []);

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {shoppingItems.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={purchasedItems.includes(item)}
              onChange={() => handleToggleItem(item)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
