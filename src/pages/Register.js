import './Register.css';
import { Container, TextField, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';

// const useStyles = makeStyles({
//   fields: {
//     display: 'block',
//   },
// });
// const handleChange = () => {
//   e.preventDefault();
//   // {e.target.value} =
// };

const Register = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [slogan, setSlogan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && slogan) {
      console.log(name, date, slogan);
    }
  };

  return (
    <Container>
      <Typography variant='h4' color='secondary' align='center'>
        Register Your Party
      </Typography>
      <form
        noValidate
        autoComplete='off'
        className='form'
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setName(e.target.value)}
          className='field'
          id='outlined-basic'
          label='Party name'
          variant='outlined'
          color='secondary'
          sx={{
            marginTop: 2,
          }}
        />
        <TextField
          onChange={(e) => setDate(e.target.value)}
          className='field'
          id='outlined-basic'
          label='Date joined'
          variant='outlined'
          color='secondary'
          sx={{
            marginTop: 2,
          }}
        />
        <TextField
          onChange={(e) => setSlogan(e.target.value)}
          className='field'
          id='outlined-basic'
          label='Party slogan'
          variant='outlined'
          color='secondary'
          sx={{
            marginTop: 2,
          }}
        />
        <Button
          className='field'
          type='submit'
          variant='contained'
          color='secondary'
          endIcon={<SendIcon />}
          sx={{
            marginTop: 2,
          }}
        >
          Submit
        </Button>
        {/* <TextField id='outlined-basic' label='Party name' variant='outlined' /> */}
      </form>
    </Container>
  );
};

export default Register;
