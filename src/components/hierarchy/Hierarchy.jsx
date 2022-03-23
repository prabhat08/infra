import React from 'react'
import { Link } from 'react-router'

const Hierarchy = (props) => {
  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }
  return (
    <>
      <h1>Hierarchy</h1>
      <ul>
        <li> <Link to="/hierarchy/overview">Overview</Link></li>
        <li> <Link to="/hierarchy/standards">Standards</Link></li>
      </ul>
      {props.view && createElementWithProps(props.view, props)}
    </>
  )
}
export default Hierarchy


