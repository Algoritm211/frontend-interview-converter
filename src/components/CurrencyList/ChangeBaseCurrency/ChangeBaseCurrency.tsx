import { InputLabel, Select } from '@material-ui/core'
import React, {useState} from 'react'
import {allAvailableCurrencies} from "../../common/all-currencies";
import classes from './ChangeBaseCurrency.module.scss'
import {useDispatch} from "react-redux";
import {actions, loadCurrencies} from '../../../redux/currencyList-reducer';


const ChangeBaseCurrency: React.FC = () => {

  const [base, setBase] = useState('USD')
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const base = event.target.value as string
    setBase(base)
    dispatch(actions.setBase(base))
    dispatch(loadCurrencies())

  }

  const optionCurrencyBlock = allAvailableCurrencies.map((currency, index) => {
    return (
      <option value={currency} key={index}>{currency}</option>
    )
  })

  return (
    <React.Fragment>
      <InputLabel htmlFor="age-native-simple">Баз. валюта</InputLabel>
      <Select
        native
        value={base}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
        className={classes.select}
      >
        <option aria-label="None" value="Hello" />
        {optionCurrencyBlock}
      </Select>
    </React.Fragment>
  )
}

export default ChangeBaseCurrency