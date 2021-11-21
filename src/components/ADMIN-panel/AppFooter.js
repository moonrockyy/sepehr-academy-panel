import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">تیم ویژوال</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
