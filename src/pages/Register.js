import './Register.css';
import { Container, TextField, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import validator from 'validator';

const Register = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [slogan, setSlogan] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const validateDate = (value) => {
    if (validator.isDate(value)) {
      setErrorMessage('Valid date');
      setDate(value);
    } else {
      setErrorMessage('Enter valid date!: year/month/day');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && slogan) {
      // validateDate();
      console.log(name, date, slogan);
    }
  };

  return (
    <Container>
      <Typography variant='h4' mt={3} color='secondary' align='center'>
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
          onChange={(e) => validateDate(e.target.value)}
          
          className='field'
          id='outlined-basic'
          label='Date joined: yyyy/mm/dd'
          variant='outlined'
          color='secondary'
          sx={{
            marginTop: 2,
          }}
        />
        <span>{errorMessage}</span>

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
