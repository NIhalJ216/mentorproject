import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { COMPONENTS } from '../../Utils/Constants';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENT_DETAILS } from '../../Redux/Constants';
import { addClientData, updateClientData } from '../../Services/clientServices';
import { ROUTES } from '../../Routes/Paths';
import { BILLING_METHOD, CURRENCIES } from '../../Utils/DataConstants';
import './AddClient.scss';

function AddClient() {
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON } = COMPONENTS;
  const { CLIENTS } = ROUTES;
  const [isUpdate, setIsUpdate] = useState(false);
  const [emptyPayload, setEmptyPayload] = useState({
    clientName: '',
    currency: '',
    billingMethod: '',
    createdBy: 1,
    updatedBy: 1,
    isActive: true,
    createdDate: new Date(),
    updatedDate: new Date(),
    emailId: '',
    firstName: '',
    lastName: '',
    phone: 0,
    mobile: 0,
    fax: ''
  });
  const [payload, setPayload] = useState({ ...emptyPayload });

  const updatePayload = (pairs) => setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

  // const handleActionDispatch = (type, data = []) => dispatch({ type, data });

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
        alignItems: 'end',
        marginTop: '0.8rem'
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
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'billingMethodLabel',
      label: 'Billing Method',
      columnWidth: 3.5
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
        alignItems: 'end',
        marginTop: '0.8rem'
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
        alignItems: 'end',
        marginTop: '0.8rem'
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
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'phoneLabel',
      label: 'Phone',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'mobileLabel',
      label: 'Mobile',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '0.8rem'
      },
      key: 'faxLabel',
      label: 'Fax',
      columnWidth: 3
    }
  ];

  const clientInputs = [
    {
      control: TEXT_FIELD,
      key: 'clientName',
      variant: 'standard',
      label: 'Client',
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'currency',
      label: 'currency',
      options: CURRENCIES,
      isSelecteAllAllow: false,
      columnWidth: 6
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '1rem' },
      key: 'billingMethod',
      label: 'Billing Method',
      options: BILLING_METHOD,
      isSelecteAllAllow: false,
      columnWidth: 6
    }
  ];

  const contactsInputs = [
    {
      control: TEXT_FIELD,
      // groupStyle: { marginTop: '1rem' },
      key: 'emailId',
      variant: 'standard',
      label: 'EmailId',
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'firstName',
      variant: 'standard',
      label: 'First Name',
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'lastName',
      variant: 'standard',
      label: 'Last Name',
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'phone',
      variant: 'standard',
      label: 'Phone',
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'mobile',
      variant: 'standard',
      label: 'Mobile',
      columnWidth: 6
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginTop: '1rem' },
      key: 'fax',
      variant: 'standard',
      label: 'Fax',
      columnWidth: 6
    }
  ];

  const actionButtons = [
    {
      control: BUTTON,
      // groupStyle: { marginRight: '1rem' },
      btnTitle: 'Submit',
      handleClickButton: () => handleAddClient(),
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
      groupStyle: { position: 'absolute', right: '1rem' },
      color: 'error',
      handleClickIcon: () => navigate(CLIENTS),
      columnWidth: 0.5
    }
  ];

  console.log('isUpdate', isUpdate);
  const handleAddClient = () => {
    const data = payload;
    const id = location?.state?.clientId;
    const res = isUpdate ? updateClientData(id, data) : addClientData(data);
    if (res) {
      alert('Client added Successfully.');
      setIsUpdate(false);
      setPayload(emptyPayload);
      console.log('ClientDataSave', res);
    }
  };

  const handleChangeData = (key, val, ind) => {
    if (key) {
      const updateFields = { [key]: val };
      if (key === 'mobile') {
        updateFields.mobile = parseInt(val, 10);
      } else if (key === 'phone') {
        updateFields.phone = parseInt(val, 10);
      } else {
        updateFields[key] = val;
      }
      updatePayload({ ...updateFields });
    }
  };

  useEffect(() => {
    console.log('locationState', location?.state);
    if (location?.state) {
      updatePayload(location?.state);
      setIsUpdate(true);
    }
  }, [location?.state]);

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
          position: 'fixed',
          bottom: 0,
          width: '100%',
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
