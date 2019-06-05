import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
  snackbar: {
    backgroundColor: '#FFF',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2);',
    color: '#000'
  },
  okay:{
    color: '#7dbbc3'
  },
  close_icon:{
    height: '20px',
  }
}));

function SimpleSnackbar({handleClose,open,message}) {
  const classes = useStyles();

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        >
        <SnackbarContent
          className={classes.snackbar}
          message={<span id="message-id">{message}</span>}
          action={[
            <Button className={classes.okay} key="okay" size="small" onClick={handleClose}>
              Okay
            </Button>,
          ]}
        />
      </Snackbar>
    </div>
  );
}

export default SimpleSnackbar;

/*
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <img src="images/close_icon.png" className={classes.close_icon}
              />
            </IconButton>,
*/