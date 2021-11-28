import React from 'react'
import BtnContainer from './BtnContainer/BtnContainer'
import LoginTitle from './LoginTitle/LoginTitle'
import LoginForm from './LoginForm/LoginForm'
import LoginImg from './LoginImg/LoginImg'
import { ToastContainer } from 'react-toastify'
import './Login.css'

const Login = () => {
  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={2500} rtl={true} />
      <div className="container login-container">
        <div className="row mt-5 p-4">
          <div className="mb-3 col-lg-12 col-xl-7 order-xl-last d-flex justify-content-center align-items-start">
            <LoginImg />
          </div>
          <div className="login-form col-lg-12 order-xl-first col-xl-5 p-5  d-flex flex-column form-change">
            <BtnContainer />
            <LoginTitle />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
