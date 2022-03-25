import React from 'react'
import Logo from '../../images/logo-formerly-via.svg'
import Styles from './TopHeader.module.css'
import classnames from 'classnames'

const TopHeader = () => {
  return (
    <header className={classnames('top-bar', Styles.header)} role='banner'>
      <h1 className='logo'>
        <a href='/' data-selector='logo-link'>
          <img
            src={Logo}
            className={Styles.logo}
            alt={'Watermark Student Learning and Licensure | formerly Via'}/>
        </a>
      </h1>
    </header>
  )
}

export default TopHeader