import React, { forwardRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Icon } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { STATUS, COMPONENTS } from '../../Utils/Constants';
import RenderComponent from '../RenderComponents/RenderComponents';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function DialogBox({
  open,
  titleType,
  handleClose,
  title,
  content,
  isCancelButton = true,
  cancelButtonText,
  isProceedButton = true,
  proceedButtonText,
  handleProceed
}) {
  const { SUCCESS, FAILED, WARNING, ERROR } = STATUS;
  const { BUTTON } = COMPONENTS;
  const IconStyle = { marginRight: '0.5rem' };

  const myCloseModal = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    handleClose();
  };

  const getIcon = (titleType) => {
    switch (titleType) {
      case SUCCESS:
        return <CheckCircleOutlineIcon style={IconStyle} />;
      case FAILED:
        return <ErrorOutlineRoundedIcon style={IconStyle} />;
      case WARNING:
        return <WarningAmberIcon style={IconStyle} />;
      case ERROR:
        return <CancelOutlinedIcon style={IconStyle} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted fullWidth maxWidth="sm" onClose={myCloseModal}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          {titleType && <Icon sx={{ display: 'contents' }}>{getIcon(titleType)}</Icon>}
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {isProceedButton && (
            <RenderComponent
              metaData={{
                control: BUTTON,
                color: 'info',
                size: 'small',
                btnTitle: proceedButtonText || 'Proceed',
                handleClickButton: () => handleProceed()
              }}
            />
          )}
          {isCancelButton && (
            <RenderComponent
              metaData={{
                control: BUTTON,
                color: 'info',
                btnTitle: cancelButtonText || 'Cancel',
                handleClickButton: () => myCloseModal()
              }}
            />
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
