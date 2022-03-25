import React from 'react'
import { WmButton, WmTabItem, WmTabList, WmTabPanel } from '@watermarkinsights/ripple-react'

const SettingsHeader = (props) => {
  const handleWmTabSelected = (event) => {
    const tabId = event.target.tabId
    props.router.push(`/settings/${tabId}`)
  }

  return (
    <div>
      <h1>Settings</h1>
      <WmTabList selectedTab={props.selectedTab} onWmTabSelected={handleWmTabSelected}>
        <WmTabItem tabId='configuration'>Configuration</WmTabItem>
        <WmTabItem tabId='imports'>Imports</WmTabItem>
      </WmTabList>
    </div>
  )
}

export default SettingsHeader