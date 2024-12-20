//App.js
import React, { useRef } from 'react';
import GroceryList from './GroceryList';
import Content from './Content';
function App() {
  const groceryListRef = useRef();
  return (
    <div className="App">
      <Content 
        refreshGroceryList={() => groceryListRef.current.refreshList()} 
        addItem={(newItem) => groceryListRef.current.addItem(newItem)} 
      />
      <GroceryList ref={groceryListRef} />
    </div>
  );
}
export default App;
