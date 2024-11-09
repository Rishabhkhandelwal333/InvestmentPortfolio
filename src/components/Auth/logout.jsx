import React from 'react';
import { Button } from '@mui/material';

function Logout({ onLogout }) {
  return (
    <Button variant="contained" color="secondary" onClick={onLogout}>
      Logout
    </Button>
  );
}

export default Logout;
