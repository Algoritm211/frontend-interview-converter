import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import React, {useState} from 'react'
import classes from './CurrencyList.module.scss'
import CurrencyTable from "./CurrencyTable/CurrencyTable";
import FavoriteModal from "./FavoriteModal/FavoriteModal";

const CurrencyList: React.FC = () => {

  const [isFavoriteModal, setIsFavoriteModal] = useState(false)

  const onCloseFavoriteModal = () => {
    setIsFavoriteModal(false)
  }

  return (
    <div className={classes.currencyList}>
      <div>
        <Button variant="outlined" color="primary" onClick={() => setIsFavoriteModal(true)}>
          Избранное
        </Button>
      </div>
      <div className={classes.currencyTable}>
        <CurrencyTable />
      </div>
      {isFavoriteModal && <FavoriteModal toggleClose={onCloseFavoriteModal} />}
    </div>
  )
}


export default CurrencyList