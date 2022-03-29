import React, {useState} from 'react'
import {WmButton, WmTabItem, WmTabList} from '@watermarkinsights/ripple-react'

const AcademicsHeader = (props) => {
  const [showcaseList, setShowcaseList] = useState(null)
  const pathname = props.location.pathname
  const selectedTab = pathname.substring(pathname.lastIndexOf('/') + 1)

  const handleWmTabSelected = (event) => {
    const tabId = event.target.tabId
    props.router.push(`/academics/${props.params.hierarchyId}/${tabId}`)
  }

  function handleClick() {
    console.log(props.toggleSnackbar)

    if (props.toggleSnackbar) {
      props.toggleSnackbar(true, `Snackbar called - ${Math.ceil(Math.random()*100)}`)
    }
  }

  async function handleGetShowcase() {
    let url = '/api/users/616685bd84123988649d04b8/showcases'
    let response  =  await fetch(url)
    let data  = await response.text()
    setShowcaseList(JSON.parse(data))
  }

  return (
    <div>
      <h1>Academics</h1>
      <WmTabList selectedTab={props.selectedTab} onWmTabSelected={handleWmTabSelected}>
        <WmTabItem tabId='overview'>Overview</WmTabItem>
        <WmTabItem tabId='standards'>Standards</WmTabItem>
        <WmTabItem tabId='rubrics'>Rubrics</WmTabItem>
      </WmTabList>
      <div>
        <p>This is page header</p>
        <WmButton buttonType='primary' onClick={handleClick}>Show </WmButton>
        <WmButton buttonType='primary' onClick={handleGetShowcase}>Get Showcase Data</WmButton>

        {showcaseList && showcaseList.map(showcase => {
          return(<div key={showcase.id} className="paper-card vui-mt-20">{showcase.title}</div>)
        })}
      </div>
    </div>
  )
}

export default AcademicsHeader