import React from 'react'
import { Link } from 'react-router'
import Styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside>
      <ul className={Styles.sidebar}>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar