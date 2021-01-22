import {Button} from '@material-ui/core'
import React, {useState} from 'react'
import classes from './CurrencyList.module.scss'
import CurrencyTable from "./CurrencyTable/CurrencyTable";
import FavoriteModal from "./FavoriteModal/FavoriteModal";
import ChangeBaseCurrency from "./ChangeBaseCurrency/ChangeBaseCurrency";

const CurrencyList: React.FC = () => {

  const [isFavoriteModal, setIsFavoriteModal] = useState(false)

  const onCloseFavoriteModal = () => {
    setIsFavoriteModal(false)
  }

  return (
    <div className={classes.currencyList}>
      <div className={classes.settingsButtons}>
        <div>
         <ChangeBaseCurrency />
        </div>
        <div>
          <Button variant="outlined" color="primary" onClick={() => setIsFavoriteModal(true)}>
            Избранное
          </Button>
        </div>
      </div>
      <div className={classes.currencyTable}>
        <CurrencyTable />
      </div>
      {isFavoriteModal && <FavoriteModal toggleClose={onCloseFavoriteModal} />}
    </div>
  )
}


export default CurrencyList