import React from 'react'
import Sidebar from './sidebar/Sidebar'
import TopHeader from './topheader/TopHeader'
import Styles from './App.module.css'

export default function App(props) {

  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }

  return (
    <>
      <TopHeader/>
      <div style={{'display': 'flex', 'flexDirection': 'row'}}>
        <Sidebar/>
        <main style={{flex: 1}}>
          {props.content && createElementWithProps(props.content, props)}
        </main>
      </div>
    </>
  );
}
