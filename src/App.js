//App.js 
// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect } from 'react';
import GroceryList from './GroceryList';


function App() {
  const API_URL = 'http://localhost:3500/items';



  return (
    <div className="App">
      <Header />
      <Content />
      <GroceryList />
      <Footer />
    </div>
  );
}

export default App;
