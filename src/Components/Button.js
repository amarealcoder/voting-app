import { Button } from '@mui/material';

export default function Btn({ endIcon }) {
  return (
    <div>
      <Button
        className='field'
        type='submit'
        variant='contained'
        color='secondary'
        sx={{
          marginTop: 2,
        }}
        endIcon={endIcon}
        
      >
       Submit
      </Button>
    </div>
  );
}
