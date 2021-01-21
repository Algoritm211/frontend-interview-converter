import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import classes from './FavoriteModal.module.scss';
import FavoriteModalForm from "./FavoriteModalForm/FavoriteModalForm";

type Props = {
  toggleClose: () => void
}

const FavoriteModal:React.FC<Props> = ({toggleClose}) => {
  return (
      <Dialog
        open={true}
        onClose={toggleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogWindow}
      >
        <DialogTitle id="alert-dialog-title">{"Избранное"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FavoriteModalForm />
          </DialogContentText>
        </DialogContent>
      </Dialog>
  )
}
export default FavoriteModal