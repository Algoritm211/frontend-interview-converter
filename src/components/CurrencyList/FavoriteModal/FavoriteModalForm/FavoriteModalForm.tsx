import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import {Form, Formik} from "formik";
import React from "react";
import classes from './FavoriteModalForm.module.scss'
import {allAvailableCurrencies} from "../../../common/all-currencies";
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "../../../../redux/currencyList-selector";
import { actions } from "../../../../redux/currencyList-reducer";

type Props = {
  toggleClose: () => void
}

const FavoriteModalForm: React.FC<Props> = (props) => {

  // Any because it is formik handleChange
  const checkBoxes = (handleChange: any, checkedArr: Array<string>) => {
    const checkboxes = allAvailableCurrencies.map((currency, index) => {
      const checked = checkedArr.some(curr => curr === currency)
      return (
        <div className={classes.checkBox} key={index}>
          <FormControlLabel control={
            <Checkbox
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
        onSubmit={(values) => {
          dispatch(actions.setFavoriteCurrencies(values.checkedCurrencies))
          props.toggleClose()
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({values, handleChange}) => (
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


export default FavoriteModalForm