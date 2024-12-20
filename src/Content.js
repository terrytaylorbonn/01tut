import React from 'react';
import { useState } from 'react';

const Content = ({ refreshGroceryList }) => {
  const [name, setName] = useState('name1');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['name1', 'name2', 'name3'];
    const init = Math.floor(Math.random() * 3);
    return setName(names[init]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
    refreshGroceryList();
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>hello {name}</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me</button>
    </main>
  );
};

export default Content;