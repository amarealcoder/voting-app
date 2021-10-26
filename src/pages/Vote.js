import React, { useEffect, useState } from 'react';

const Vote = () => {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/parties')
      .then((res) => res.json())
      .then((data) => setParties(data));
  }, []);
  return (
    <div className='App'>
      {parties.map((party) => (
        <h3>{party.name}</h3>
      ))}
    </div>
  );
};

export default Vote;
