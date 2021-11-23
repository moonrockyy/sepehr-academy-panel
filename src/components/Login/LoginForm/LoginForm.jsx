import React, { useState } from 'react'
import { useFormik } from 'formik'
import LoginButton from '../LoginButton/LoginButton'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import eyeImg from '../../../assets/images/eyeicon.png'
import LoginUser from '../../../core/services/api/Login.api'
import '../Login.css'

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const history = useHistory()

  const onSubmit = async (values) => {
    const userLogin = {
      email: values.email,
      password: values.password,
    }

    await LoginUser(userLogin)
    // setTimeout(() => {
    //   {
    //     result && history.push('/')
    //   }
    // }, 2500)
  }

  const validate = (values) => {
    let errors = {}

    if (!values.email) {
      errors.email = 'ایمیل خود را وارد کنید'
    }

    if (!values.password) {
      errors.password = 'رمز عبور خود را وارد کنید'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  const [passwordShown, setPasswordShown] = useState(true)
  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={2500} rtl={true} />
      <form onSubmit={formik.handleSubmit} className="mt-4">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="ایمیل"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="mt-1 text-danger">
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
        </div>

        <div className="mb-3 pass-form">
          <input
            type={passwordShown ? 'password' : 'text'}
            className="form-control"
            placeholder="رمز عبور"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />

          <div
            className="pass-eye"
            onClick={() => {
              setPasswordShown(!passwordShown)
            }}
          >
            <img src={eyeImg} />
          </div>

          <div className="text-danger mt-1">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <LoginButton />
        </div>
      </form>
    </>
  )
}

export default LoginForm
