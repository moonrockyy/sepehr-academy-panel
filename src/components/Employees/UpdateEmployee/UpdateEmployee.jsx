import React, { useState } from 'react'
import { useFormik } from 'formik'
import { getItem } from '../../../core/services/storage/storage'
import jwt_decode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'
import './UpdateEmployee.css'
import UpdateInfo from '../../../core/services/api/UpdateEmployee.api'

const UpdateEmployee = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    nationalId: '',
    address: '',
  }

  const token = getItem('token')
  const id = jwt_decode(token)._id

  const onSubmit = async (values) => {
    const userUpdate = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      birthDate: values.birthDate,
      nationalId: values.nationalId,
      address: values.address,
    }
    const result = await UpdateInfo(userUpdate, id)
    console.log(result)
  }

  const validate = (values) => {
    let errors = {}

    if (!values.fullName) {
      errors.fullName = 'نام کاربری خود را وارد کنید'
    }

    if (!values.email) {
      errors.email = 'ایمیل خود را وارد کنید'
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'شماره تماس خود را وارد کنید'
    }

    if (!values.birthDate) {
      errors.birthDate = 'تاریخ تولد خود را وارد کنید'
    }

    if (!values.nationalId) {
      errors.nationalId = 'کد ملی خود را وارد کنید'
    }

    if (!values.address) {
      errors.address = 'آدرس خود را وارد کنید'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={3000} rtl={true} />
      <form onSubmit={formik.handleSubmit} className="mt-1">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="نام کاربری"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
          </div>
        </div>

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
          <div className="text-danger mt-1">
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="شماره تماس"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="تاریخ تولد"
            id="birthDate"
            name="birthDate"
            onChange={formik.handleChange}
            value={formik.values.birthDate}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <div>{formik.errors.birthDate}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="کد ملی"
            id="nationalId"
            name="nationalId"
            onChange={formik.handleChange}
            value={formik.values.nationalId}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.nationalId && formik.errors.nationalId ? (
              <div>{formik.errors.nationalId}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="آدرس"
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <div className="text-danger mt-1">
            {formik.touched.address && formik.errors.address ? (
              <div>{formik.errors.address}</div>
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-md">
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateEmployee
