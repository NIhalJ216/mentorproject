import React from 'react';
import { Grid, Alert } from '@mui/material';

function AlertComponent({ alertOpen, setAlertBox, alertType, message }) {
  const handleAlertClose = () => {
    setAlertBox({ alertOpen: false, alertType: '', message: '' });
  };
  return (
    <Grid container spacing={3}>
      {alertOpen && (
        <Grid item xs={12} style={{ marginTop: '1rem', marginBottom: '-1rem' }}>
          <Alert
            severity={alertType}
            onClose={() => {
              handleAlertClose();
            }}
          >
            {message}
          </Alert>
        </Grid>
      )}
    </Grid>
  );
}

export default AlertComponent;
