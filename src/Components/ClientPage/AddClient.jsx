import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { COMPONENTS } from '../../Utils/Constants';
import RenderComponents from '../RenderComponents/RenderComponents';
import { BILLING_METHOD, CURRENCIES } from '../../Utils/DataConstants';

function AddClient() {
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY } = COMPONENTS;

  const clientLabels = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'clientLabel',
      label: 'Client Name',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'currencyLabel',
      label: 'Currency',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'billingMethodLabel',
      label: 'Billing Method',
      columnWidth: 3
    }
  ];

  const contactsLabels = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'emailIdLabel',
      label: 'EmailId',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'firstNameLabel',
      label: 'First Name',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'lastNameLabel',
      label: 'Last Name',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'phoneLabel',
      label: 'Phone',
      columnWidth: 3
    }
  ];

  const clientInputs = [
    {
      control: TEXT_FIELD,
      key: 'client',
      variant: 'standard',
      label: 'Client',
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '0.5rem' },
      key: 'currency',
      label: 'currency',
      options: CURRENCIES,
      isSelecteAllAllow: false,
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '0.5rem' },
      key: 'billingMethod',
      label: 'Billing Method',
      options: BILLING_METHOD,
      isSelecteAllAllow: false,
      columnWidth: 3
    }
  ];

  const contactsInputs = [
    {
      control: TEXT_FIELD,
      key: 'emailId',
      variant: 'standard',
      label: 'EmailId',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      key: 'firstName',
      variant: 'standard',
      label: 'First Name',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      key: 'lastName',
      variant: 'standard',
      label: 'Last Name',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      key: 'phone',
      variant: 'standard',
      label: 'Phone',
      columnWidth: 3
    }
  ];

  const actionButtons = [
    {
      control: BUTTON,
      // groupStyle: { marginRight: '1rem' },
      btnTitle: 'Submit',
      handleClickButton: () => null,
      columnWidth: 0.8
    },
    {
      control: BUTTON,
      // groupStyle: { marginRight: '1rem' },
      btnTitle: 'Cancel',
      handleClickButton: () => null,
      columnWidth: 0.8
    }
  ];

  return (
    <Paper elevation={2} sx={{ padding: '1.5rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ paddingLeft: '0.8rem' }}>
          <RenderComponents
            metaData={{
              control: TYPOGRAPHY,
              label: 'Client',
              labelStyle: { fontWeight: 'bold' }
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <Grid item xs={4} style={{ paddingLeft: '1.5rem' }}>
            {clientLabels?.map((comp, ind) => (
              <RenderComponents key={ind} metaData={comp} ind={ind} />
            ))}
          </Grid>
          <Grid item xs={8}>
            {clientInputs?.map((comp, ind) => (
              <RenderComponents key={ind} metaData={comp} ind={ind} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={12} style={{ paddingLeft: '0.8rem' }}>
          <RenderComponents
            metaData={{
              control: TYPOGRAPHY,
              label: 'Contacts',
              labelStyle: { fontWeight: 'bold' }
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <Grid item xs={4} style={{ paddingLeft: '1.5rem' }}>
            {contactsLabels?.map((comp, ind) => (
              <RenderComponents key={ind} metaData={comp} ind={ind} />
            ))}
          </Grid>
          <Grid item xs={8}>
            {contactsInputs?.map((comp, ind) => (
              <RenderComponents key={ind} metaData={comp} ind={ind} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={3}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          {actionButtons?.map((comp, ind) => (
            <RenderComponents key={ind} metaData={comp} ind={ind} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddClient;
