import React from 'react'
import { Link } from 'react-router'

const Settings = (props) => {
  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }

  console.log(props)
  return (
    <>
      <h1>Settings</h1>
      <ul>
        <li> <Link to="/settings/home">home</Link></li>
        <li> <Link to="/settings/imports">imports</Link></li>
      </ul>
      {props.view && createElementWithProps(props.view, props)}
    </>
  )
}
export default Settings


