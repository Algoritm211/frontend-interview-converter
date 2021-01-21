import {Backdrop} from '@material-ui/core'
import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Drawer.module.scss'
import classNames from 'classnames'

type Link = {
  to: string,
  label: string
}

type Props = {
  isOpen: boolean,
  onClose: () => void
}


const Drawer: React.FC<Props> = (props) => {

  const links: Array<Link> = [
    {to: '/main', label: 'Главная'},
    {to: '/converter', label: 'Конвертер'}
  ]

  const linksBlock = links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink
          to={link.to}
          onClick={props.onClose}
          activeClassName={classes.active}
        >
          {link.label}
        </NavLink>
      </li>
    )
  })

  return (
    <React.Fragment>
      <nav className={classNames(classes.Drawer, {[classes.close]: !props.isOpen})}>
        <ul>
          {linksBlock}
        </ul>
      </nav>
      {props.isOpen && <Backdrop open={props.isOpen} onClick={props.onClose}/>}
    </React.Fragment>
  )
}

export default Drawer