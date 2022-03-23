import { Link } from 'react-router';
import React from "react";

export default function App(props) {

  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }

  console.log(props)
  return (
    <React.Fragment>
      <header>
        <ul>
          <li> <Link to="/hierarchy">Hierarchy</Link></li>
          <li> <Link to="/settings">Settings</Link></li>
        </ul>
      </header>
       {props.content && createElementWithProps(props.content, props)}
    </React.Fragment>
  );
}