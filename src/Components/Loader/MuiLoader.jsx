import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

function MuiLoader({ open }) {
  return (
    <Backdrop open={open} sx={{ zIndex: '20' }}>
      <CircularProgress />
    </Backdrop>
  );
}

export default MuiLoader;
