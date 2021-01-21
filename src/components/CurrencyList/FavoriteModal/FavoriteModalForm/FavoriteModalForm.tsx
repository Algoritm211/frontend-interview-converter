import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import {Field, Form, Formik, FormikProps} from "formik";
import React from "react";
import classes from './FavoriteModalForm.module.scss'
import {allAvailableCurrencies} from "../../../common/all-currencies";


const FavoriteModalForm = () => {

  // Any because it is formik handleChange
  const checkBoxes = (handleChange: any) => {
    const checkboxes = allAvailableCurrencies.map((currency) => {
      return (
        <div className={classes.checkBox}>
          <FormControlLabel control={
            <Checkbox
              id="checkedCurrencies"
              name="checkedCurrencies"
              onChange={ handleChange }
              color="primary"
              value={currency}
            />} label={currency} />
        </div>
      )
    })
    return checkboxes
  }


  return (
    <div className={classes.favoriteModal}>
      <Formik
        initialValues={{
          checkedCurrencies: [],
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({values, setFieldValue, handleChange}) => (
          <Form>
            <div role="group" aria-labelledby="checkbox-group">
              {checkBoxes(handleChange)}
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