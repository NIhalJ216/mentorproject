import React from 'react';
import { Grid, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Dashboard
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
