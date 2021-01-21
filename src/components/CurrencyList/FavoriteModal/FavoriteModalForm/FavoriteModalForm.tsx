import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import {Field, Form, Formik, FormikProps} from "formik";
import React from "react";
import classes from './FavoriteModalForm.module.scss'
import {allAvailableCurrencies} from "../../../common/all-currencies";
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "../../../../redux/currencyList-selector";
import { actions } from "../../../../redux/currencyList-reducer";


const FavoriteModalForm = () => {

  // Any because it is formik handleChange
  const checkBoxes = (handleChange: any, checkedArr: Array<string>) => {
    const checkboxes = allAvailableCurrencies.map((currency, index) => {
      const checked = checkedArr.some(curr => curr === currency)
      return (
        <div className={classes.checkBox} key={index}>
          <FormControlLabel control={
            <Checkbox
              id="checkedCurrencies"
              name="checkedCurrencies"
              onChange={ handleChange }
              checked={checked}
              color="primary"
              value={currency}
            />} label={currency} />
        </div>
      )
    })
    return checkboxes
  }

  const dispatch = useDispatch()
  const favoriteCurrencies = useSelector(getFavorites)

  return (
    <div className={classes.favoriteModal}>
      <Formik
        initialValues={{
          checkedCurrencies: favoriteCurrencies,
        }}
        onSubmit={async (values) => {
            dispatch(actions.setFavoriteCurrencies(values.checkedCurrencies))
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({values, setFieldValue, handleChange}) => (
          <Form>
            <div role="group" aria-labelledby="checkbox-group">
              {checkBoxes(handleChange, values.checkedCurrencies)}
            </div>
            <div className={classes.submitButton}>
              <Button type="submit" color={'primary'} variant={'contained'}>Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )

}


const CustomCheck: React.FC = (props) => {
  return (
    <Checkbox color={"primary"} />
  )
}
export default FavoriteModalForm