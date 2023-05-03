import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { COMPONENTS } from '../../Utils/Constants';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENT_DETAILS } from '../../Redux/Constants';
import { ROUTES } from '../../Routes/Paths';
import { BILLING_METHOD, CURRENCIES } from '../../Utils/DataConstants';

function AddClient() {
  const navigate = useNavigate();
  const clientData = useSelector((state) => state.ClientDetails?.clientInfo);
  const dispatch = useDispatch();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON } = COMPONENTS;
  const { CLIENTS } = ROUTES;
  const [payload, setPayload] = useState({
    clientName: '',
    currency: '',
    billingMethod: '',
    emailId: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const updatePayload = (pairs) => setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

  const handleActionDispatch = (type, data = []) => dispatch({ type, data });

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
      key: 'clientName',
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
      handleClickButton: () => handleActionDispatch(CLIENT_DETAILS, payload),
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

  const topComponents = [
    {
      control: ICON,
      iconName: <ArrowBackIosIcon />,
      // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
      color: 'primary',
      handleClickIcon: () => navigate(CLIENTS),
      columnWidth: 0.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start'
      },
      key: 'addClientLabel',
      label: 'Add Client',
      columnWidth: 1
    },
    {
      control: ICON,
      iconName: <CloseIcon />,
      groupStyle: { marginLeft: '70rem' },
      color: 'error',
      handleClickIcon: () => navigate(CLIENTS),
      columnWidth: 0.5
    }
  ];

  const handleChangeData = (key, val, ind) => {
    console.log('KEYVAL', key, val, ind);
    if (key) {
      const updateFields = { [key]: val };
      updatePayload({ ...updateFields });
    }
  };

  console.log('paylodsa', payload);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: '#f9fafc',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottom: '1px solid #e9e9e9'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll' }}>
        <Box style={{ padding: '1.5rem', backgroundColor: 'white' }}>
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
                  <RenderComponents
                    key={ind}
                    metaData={comp}
                    ind={ind}
                    payload={payload}
                    handleChange={handleChangeData}
                  />
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
                  <RenderComponents
                    key={ind}
                    metaData={comp}
                    ind={ind}
                    payload={payload}
                    handleChange={handleChangeData}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#f9fafc',
          borderTop: '1px solid #e9e9e9'
        }}
      >
        {actionButtons?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
    </Grid>
  );
}

export default AddClient;
