import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/ADMIN-panel'
import { getItem } from '../core/services/storage/storage'
import Login from '../components/Login/Login'
import Register from './../components/Register/Register'

const DefaultLayout = () => {
  return (
    <>
      {getItem('token') ? (
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
      ) : (
        <Register />
      )}
    </>
  )
}

export default DefaultLayout
