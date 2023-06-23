import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { COMPONENTS, STATUS } from '../../Utils/Constants';
import RenderComponents from '../RenderComponents/RenderComponents';
import { CLIENT_DETAILS } from '../../Redux/Constants';
import { addClientData, updateClientData } from '../../Services/clientServices';
import { ROUTES } from '../../Routes/Paths';
import { BILLING_METHOD, CURRENCIES } from '../../Utils/DataConstants';
import AlertComponent from '../Alert/AlertComponent';
import './AddClient.scss';

function AddClient() {
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON, NONE } = COMPONENTS;
  const { SUCCESS, ERROR, FAILED, WARNING, INFO } = STATUS;
  const { CLIENTS } = ROUTES;
  const [error, setError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [alertBox, setAlertBox] = useState({
    alertOpen: false,
    alertType: '',
    message: ''
  });

  const [emptyPayload, setEmptyPayload] = useState({
    clientName: '',
    currencyId: 0,
    billingMethodId: 0,
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

  const clientInputs = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
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
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'clientName',
      variant: 'standard',
      label: '',
      isError: error && !payload.clientName,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
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
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { height: '3rem' },
      key: 'currencyId',
      label: '',
      options: CURRENCIES,
      isSelecteAllAllow: false,
      isError: error && !payload.currencyId,
      helperText: error && 'Please select value',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'billingMethodLabel',
      label: 'Billing Method',
      columnWidth: 3
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { height: '3rem' },
      key: 'billingMethodId',
      label: '',
      options: BILLING_METHOD,
      isSelecteAllAllow: false,
      isError: error && !payload.billingMethodId,
      helperText: error && 'Please select value',
      columnWidth: 5
    }
  ];

  const contactsInputs = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'emailIdLabel',
      label: 'EmailId',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'emailId',
      variant: 'standard',
      label: '',
      isError: error && !payload.emailId,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'firstNameLabel',
      label: 'First Name',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'firstName',
      variant: 'standard',
      label: '',
      isError: error && !payload.firstName,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'lastNameLabel',
      label: 'Last Name',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'lastName',
      variant: 'standard',
      label: '',
      isError: error && !payload.lastName,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'phoneLabel',
      label: 'Phone',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'phone',
      variant: 'standard',
      label: '',
      isError: error && !payload.phone,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'mobileLabel',
      label: 'Mobile',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'mobile',
      variant: 'standard',
      label: '',
      isError: error && !payload.mobile,
      helperText: error && 'Please fill this field',
      columnWidth: 5
    },
    {
      control: NONE,
      // groupStyle: { marginBottom: '0.5rem' },
      columnWidth: 4
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      key: 'faxLabel',
      label: 'Fax',
      columnWidth: 3
    },
    {
      control: TEXT_FIELD,
      groupStyle: { height: '3rem' },
      key: 'fax',
      variant: 'standard',
      label: '',
      isError: error && !payload.fax,
      helperText: error && 'Please fill this field',
      columnWidth: 5
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
      // handleClickButton: () => null,
      handleClickButton: () =>
        setAlertBox({ alertOpen: true, alertType: INFO, message: 'Client updated successfully.' }),
      columnWidth: 0.8
    }
  ];

  const topComponents = [
    {
      control: ICON,
      groupStyle: { marginTop: '-1rem' },
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
        justifyContent: 'flex-start',
        marginTop: '-1rem'
      },
      key: 'addClientLabel',
      label: isUpdate ? 'Edit Client' : 'Add Client',
      columnWidth: 1
    },
    {
      control: ICON,
      iconName: <CloseIcon />,
      groupStyle: { position: 'absolute', right: '1rem', marginTop: '-1rem' },
      color: 'error',
      handleClickIcon: () => navigate(CLIENTS),
      columnWidth: 0.5
    }
  ];

  const handleAddClient = () => {
    const { clientName, currencyId, billingMethodId, emailId, firstName, lastName, phone, mobile, fax } = payload;
    if (
      !clientName ||
      !currencyId ||
      !billingMethodId ||
      !emailId ||
      !firstName ||
      !lastName ||
      !phone ||
      !mobile ||
      !fax
    ) {
      setError(true);
    } else {
      setError(false);
      const data = payload;
      const id = location?.state?.clientId;
      const res = isUpdate ? updateClientData(id, data) : addClientData(data);
      if (res) {
        if (isUpdate) {
          setAlertBox({ alertOpen: true, alertType: INFO, message: 'Client updated successfully.' });
        } else {
          setAlertBox({ alertOpen: true, alertType: INFO, message: 'Client added successfully.' });
        }
        setIsUpdate(false);
        setPayload(emptyPayload);
        console.log('ClientDataSave', res);
      }
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
      <AlertComponent
        alertOpen={alertBox.alertOpen}
        alertType={alertBox.alertType}
        message={alertBox.message}
        setAlertBox={setAlertBox}
      />
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: '#f9fafc',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '1rem',
          borderBottom: '1px solid #e9e9e9',
          height: '4rem'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll', padding: '1rem' }}>
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
            <Grid container style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
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
            <Grid container style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
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
