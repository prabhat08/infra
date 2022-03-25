import React from 'react'
import { WmTabPanel } from '@watermarkinsights/ripple-react'
import SettingsHeader from './settingsheader/SettingsHeader'

const Settings = (props) => {
  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }

  function renderSettingsTabs() {
    const pathname = props.location.pathname
    const selectedTab = pathname.substring(pathname.lastIndexOf('/') + 1)

    return (
      <div>
        <SettingsHeader selectedTab={selectedTab} {...props}/>
        {props.view &&
          <WmTabPanel id='single-panel' tabId={selectedTab}>
            {createElementWithProps(props.view, props)}
          </WmTabPanel>
        }
      </div>
    )
  }

  return renderSettingsTabs()
}

export default Settings


