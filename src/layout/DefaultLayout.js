import React from 'react'
import Login from 'src/components/Login/Login'
import Register from 'src/components/Register/Register'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/ADMIN-panel'
import { getItem } from '../core/services/storage/storage'

const DefaultLayout = () => {
  return (
    <>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
