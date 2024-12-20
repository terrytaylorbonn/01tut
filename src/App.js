//App.js 
// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect } from 'react';
import GroceryList from './GroceryList';
import React, { useRef } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items';
  const groceryListRef = useRef();


  return (
    <div className="App">
      <Header />
      <Content refreshGroceryList={() => groceryListRef.current.refreshList()} />
      <GroceryList ref={groceryListRef} />
      <Footer />
    </div>
  );
}

export default App;
