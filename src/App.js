// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/parties')
      .then((res) => res.json())
      .then((data) => setParties(data));
  }, []);

  return <div>parties</div>;
};

export default App;
