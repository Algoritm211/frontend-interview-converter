import { useFormik } from 'formik';
import React, {useState} from 'react'
import {Button, InputLabel, OutlinedInput, Select} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem'
import classes from './ConvertForm.module.scss'
import {useDispatch} from "react-redux";
import {convertCurrency} from "../../../redux/converter-reducer";
import { allAvailableCurrencies } from '../../common/all-currencies';

type FormValuesType =  {
  fromConvert: string,
  toConvert: string,
  amount: string
}

const ConvertForm: React.FC = () => {
  const [openFromInput, setOpenFromInput] = useState(false)
  const [openToInput, setOpenToInput] = useState(false)
  const dispatch = useDispatch()

  const currencySelectList = (fromToParam: 'from' | 'to') => {
    const currObject = allAvailableCurrencies.map((currency, index) => {
      return <MenuItem value={currency} key={index + fromToParam}>{currency}</MenuItem>
    })

    return currObject
  }

  const formik = useFormik({
    initialValues: {
      fromConvert: 'USD',
      toConvert: 'USD',
      amount: '1'
    } as FormValuesType,
    onSubmit: (values) => {
      dispatch(convertCurrency(values.fromConvert, values.toConvert, values.amount))
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.convertForm}>
      <div className={classes.text}>Конвертировать</div>
      <div>
        <InputLabel id="fromConvert">Выберите валюту</InputLabel>
        <Select
          labelId="fromConvert"
          name="fromConvert"
          open={openFromInput}
          onClose={() => setOpenFromInput(false)}
          onOpen={() => setOpenFromInput(true)}
          value={formik.values.fromConvert}
          onChange={formik.handleChange}
          className={classes.select}
        >
          <MenuItem value="">
            <em>Выберите Валюту</em>
          </MenuItem>
          {currencySelectList('from')}
        </Select>
      </div>
      <div className={classes.text}>В</div>
      <div>
        <InputLabel id="toConvert">Выберите валюту</InputLabel>
        <Select
          labelId="toConvert"
          name="toConvert"
          open={openToInput}
          onClose={() => setOpenToInput(false)}
          onOpen={() => setOpenToInput(true)}
          value={formik.values.toConvert}
          onChange={formik.handleChange}
          className={classes.select}
        >
          <MenuItem value="">
            <em>Выберите Валюту</em>
          </MenuItem>
          {currencySelectList('to')}
        </Select>
      </div>
      <div>
        <InputLabel htmlFor={'amount'}>Amount</InputLabel>
        <OutlinedInput
          id="amount"
          name="amount"
          value={ formik.values.amount }
          onChange={ formik.handleChange }
          error={ formik.touched.amount && Boolean(formik.errors.amount) }
          onBlur={ formik.handleBlur }
          className={classes.inputVolume}
        />
      </div>
      <Button type="submit" color={'primary'} variant="contained">Конвертировать</Button>
    </form>
  );
}
export default ConvertForm