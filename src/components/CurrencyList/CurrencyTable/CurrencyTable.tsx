import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import classes from "../CurrencyList.module.scss";


const CurrencyTable: React.FC = () => {
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
          <TableRow>
            <TableCell align="center">USD/EUR</TableCell>
            <TableCell align="center">0.3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default CurrencyTable