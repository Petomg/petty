import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import AdoptionList from './components/AdoptionList';
import AdoptionAdd from './components/AdoptionAdd';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App"> 

      <NavBar />
  
      <Routes>
          <Route path="/" element={<AdoptionList />} />
          <Route path="add" element={<AdoptionAdd />} />
      </Routes>
      
    </div>
  );
}

export default App;
