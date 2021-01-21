import React, {useEffect} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import classes from "./CurrencyTable.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getBaseCurrency, getFavorites, getRates} from "../../../redux/currencyList-selector";
import { loadCurrencies } from "../../../redux/currencyList-reducer";
import { sortFavorites } from "../../common/helpers";
import classNames from "classnames";


const CurrencyTable: React.FC = () => {

  const dispatch = useDispatch()
  const rates = useSelector(getRates)
  const base = useSelector(getBaseCurrency)
  const favoriteCurrencies = useSelector(getFavorites)

  useEffect(() => {
    dispatch(loadCurrencies())
  }, [dispatch])

  const sortFavoriteCurrencies = sortFavorites(Object.keys(rates), favoriteCurrencies)

  const tableCurrencyRow = sortFavoriteCurrencies.map((rate, index) => {
    return (
      <TableRow key={index}>
        <TableCell align="center">
          {`${base}/`}<span className={classNames({[classes.favoriteCurrency] : favoriteCurrencies.includes(rate)})}>{rate}</span>
        </TableCell>
        <TableCell align="center">{rates[rate]}</TableCell>
      </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell width={'160px'} align="center">Пары</TableCell>
            <TableCell width={'160px'} align="center">Курс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableCurrencyRow}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default CurrencyTable