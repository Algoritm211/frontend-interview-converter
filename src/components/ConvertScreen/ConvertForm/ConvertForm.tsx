import { useFormik } from 'formik';
import React, {useState} from 'react'
import {Button, InputLabel, OutlinedInput, Select, TextField} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem'
import classes from './ConvertForm.module.scss'

type FormValuesType =  {
  fromConvert: string,
  toConvert: string,
  amount: string
}

const ConvertForm: React.FC = () => {
  const [openFromInput, setOpenFromInput] = useState(false)
  const [openToInput, setOpenToInput] = useState(false)

  const formik = useFormik({
    initialValues: {
      fromConvert: 'USD',
      toConvert: 'UAH',
      amount: '1'
    } as FormValuesType,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'UAH'}>UAH</MenuItem>
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
          value={formik.values.fromConvert}
          onChange={formik.handleChange}
          className={classes.select}
        >
          <MenuItem value="">
            <em>Выберите Валюту</em>
          </MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'UAH'}>UAH</MenuItem>
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