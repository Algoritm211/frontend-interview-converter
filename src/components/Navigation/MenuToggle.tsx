import React from 'react'
import classes from './MenuToggle.module.scss'

type Props = {
  isOpen: boolean
  onToggle: () => void
}

const MenuToggle: React.FC<Props> = (props) => {
  const cls = [
    classes.MenuToggle,
    'fa',
    'fa-times',
    classes.open
  ]

  return (
    <React.Fragment>
      {props.isOpen && <i className={cls.join(' ')} onClick={props.onToggle}></i>}
    </React.Fragment>
  )
}

export default MenuToggle