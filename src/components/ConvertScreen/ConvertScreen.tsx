import React from 'react'
import classes from './ConvertScreen.module.scss'
import ConvertForm from "./ConvertForm/ConvertForm";
import {Paper} from '@material-ui/core';


const ConvertScreen: React.FC = () => {
  return (
    <div className={classes.convertScreen}>
      <div className={classes.convertInputs}>
        <ConvertForm/>
      </div>
      <div>
        <Paper elevation={3}>
          <div className={classes.convertResult}>
            1 USD <br /> = <br />28 UAH
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default ConvertScreen