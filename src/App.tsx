import React, {useState} from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css'
//import ConvertScreen from "./components/ConvertScreen/ConvertScreen";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "./components/Navigation/Drawer";
import MenuToggle from "./components/Navigation/MenuToggle";
import CurrencyList from "./components/CurrencyList/CurrencyList";
import withReactSuspense from "./components/hoc/WithReactSuspense";

const ConvertScreen = React.lazy(() => import('./components/ConvertScreen/ConvertScreen'))

const App: React.FC = () =>  {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.App}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onMenuToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Currency converter
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer isOpen={isMenuOpen} onClose={onMenuToggle}/>
      <MenuToggle isOpen={isMenuOpen} onToggle={onMenuToggle}/>
      <Switch>
        <Route path={'/main'} render={() => <CurrencyList />}/>
        <Route path={'/converter'} render={withReactSuspense(ConvertScreen)}/>
        <Redirect to={'/main'} />
      </Switch>
    </div>
  );
}

export default App;
