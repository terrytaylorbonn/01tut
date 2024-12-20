import React, { useEffect, useState } from 'react';

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const API_URL = 'http://localhost:3500/items';

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      const listItems = await response.json();
        setItems(listItems);
        console.log(listItems)
    } catch (err) {
      console.log(err.stack);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;