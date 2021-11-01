import React, { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Vote = () => {
  const [parties, setParties] = useState([]);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/parties')
      .then((res) => res.json())
      .then((data) => setParties(data));
  }, []);

  const handleVotes = (id) => {
    console.log(id)
    const newVotes = parties.map((party) => {
      if (id === party.id) {
        party.vote = party.vote + 1;
      }
      return party;
    });
    console.log(newVotes)
    setVotes(newVotes);
  };

  return (
    <Container>
      <div className='App'>
        {parties.map((party) => (
          <div key={party.id}>
            {party.vote}
            <h3>{party.name}</h3>
            <h3>{party.slogan}</h3>
            <h3>{party.manifesto}</h3>
            <Button
              //   className='field'
              type='submit'
              variant='contained'
              color='secondary'
              endIcon={<ArrowUpwardIcon />}
              sx={{
                marginTop: 2,
              }}
              onClick={() => handleVotes(party.id)}
            >
              Vote
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Vote;
