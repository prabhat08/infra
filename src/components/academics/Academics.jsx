import React, {useEffect} from 'react'
import AcademicsHeader from './academicsheader/AcademicsHeader'
import { WmTabPanel } from '@watermarkinsights/ripple-react'

const Academics = (props) => {
  console.log('Academics Props', props)
  console.log('Academics Props View', props.view)

  const createElementWithProps = (element, props) => {
    return React.cloneElement(element, { ...props, key: undefined, ref: undefined })
  }

  function renderAcademicsIndex() {
    return props.view && createElementWithProps(props.view, props)
  }

  function renderAcademicsTabs() {
    const pathname = props.location.pathname
    const selectedTab = pathname.substring(pathname.lastIndexOf('/') + 1)

    return (
      <>
        <AcademicsHeader selectedTab={selectedTab} {...props}/>
        {props.view &&
          <WmTabPanel id='single-panel' tabId={selectedTab}>
            {createElementWithProps(props.view, props)}
          </WmTabPanel>
        }
      </>
    )
  }

  console.log('props.params.hierarchyId', props.params.hierarchyId)

  return (props.params.hierarchyId) ? renderAcademicsTabs() : renderAcademicsIndex()
}

export default Academics


