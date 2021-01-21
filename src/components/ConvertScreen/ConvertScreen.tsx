import React from 'react'
import classes from './ConvertScreen.module.scss'
import ConvertForm from "./ConvertForm/ConvertForm";
import {Paper} from '@material-ui/core';
import {useSelector} from 'react-redux'
import {getAmount, getCurrencyObj, getIsLoading, getToConverted } from '../../redux/converter-selector';


const ConvertScreen: React.FC = () => {
  const convertedObj = useSelector(getCurrencyObj)
  const amount = useSelector(getAmount)
  const toConverted = useSelector(getToConverted)
  const isLoading = useSelector(getIsLoading)

  return (
    <div className={classes.convertScreen}>
      <div className={classes.convertInputs}>
        <ConvertForm/>
      </div>
      {convertedObj
        &&
      <div>
        <Paper elevation={3}>
          <div className={classes.convertResult}>
            {amount} {convertedObj.base} <br /> = <br />{!isLoading ? (amount * convertedObj.rates[toConverted]).toFixed(3) : '...loading'} {toConverted}
          </div>
        </Paper>
      </div>
      }
    </div>
  )
}

export default ConvertScreen