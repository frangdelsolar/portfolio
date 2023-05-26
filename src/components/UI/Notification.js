import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { uiActions } from "../../store/ui-slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification(props) {
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    dispatch(uiActions.closeNotification());
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {props.show && (
        <Snackbar
          open={props.show}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={props.severity}
            sx={{ width: "100%" }}
          >
            {props.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
