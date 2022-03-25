import React, {useContext} from 'react'
import {WmButton} from '@watermarkinsights/ripple-react'

const AcademicsIndex = ({router}) => {
  function handleClick() {
    const hierarchyId = 1
    router.push(`/academics/${hierarchyId}/overview`)
  }

  return (
    <div>
      <h1>Academics Index</h1>
      <WmButton onClick={handleClick}>Choose Node 1</WmButton>
    </div>
  )
}

export default AcademicsIndex
