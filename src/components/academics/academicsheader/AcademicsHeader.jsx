import React from 'react'
import { WmButton, WmTabItem, WmTabList, WmTabPanel } from '@watermarkinsights/ripple-react'
import {Link} from 'react-router'

const AcademicsHeader = (props) => {
  const pathname = props.location.pathname
  const selectedTab = pathname.substring(pathname.lastIndexOf('/') + 1)

  const handleWmTabSelected = (event) => {
    const tabId = event.target.tabId
    props.router.push(`/academics/${props.params.hierarchyId}/${tabId}`)
  }

  /*function handleClick() {
    console.log(props.toggleSnackbar)

    if (props.toggleSnackbar) {
      props.toggleSnackbar(true, 'Snackbar called')
    }
  }*/

  return (
    <div>
      <h1>Academics</h1>
      <WmTabList selectedTab={props.selectedTab} onWmTabSelected={handleWmTabSelected}>
        <WmTabItem tabId='overview'>Overview</WmTabItem>
        <WmTabItem tabId='standards'>Standards</WmTabItem>
        <WmTabItem tabId='rubrics'>Rubrics</WmTabItem>
      </WmTabList>
      {/*<div>
        <p>This is page header</p>
        <WmButton buttonType='primary' onClick={handleClick}>Primary</WmButton>
      </div>*/}
    </div>
  )
}

export default AcademicsHeader