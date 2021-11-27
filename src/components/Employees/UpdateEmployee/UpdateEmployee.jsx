import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { getItem } from '../../../core/services/storage/storage'
import jwt_decode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'
import './UpdateEmployee.css'
import UpdateInfo from '../../../core/services/api/UpdateEmployee.api'
import GetEmployeeById from '../../../core/services/api/GetEmployeeById.api'

const UpdateEmployee = () => {
  const [EmployeeByIdData, setEmployeeByIdData] = useState([])
  console.log(EmployeeByIdData)

  const getEmployeeById = async () => {
    const token = getItem('token')
    const id = jwt_decode(token)._id
    const result = await GetEmployeeById(id)
    setEmployeeByIdData(result)
  }

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
  const history = useHistory()

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
    setTimeout(() => {
      {
        result && history.push('/employee-info')
      }
    }, 2000)
  }

  useEffect(() => {
    getEmployeeById()
  }, [])

  const validate = (values) => {
    let errors = {}

    if (!values.fullName) {
      errors.fullName = 'نام کاربری جدید خود را وارد کنید'
    }

    if (!values.email) {
      errors.email = 'ایمیل جدید خود را وارد کنید'
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'شماره تماس جدید خود را وارد کنید'
    }

    if (!values.birthDate) {
      errors.birthDate = 'تاریخ تولد جدید خود را وارد کنید'
    }

    if (!values.nationalId) {
      errors.nationalId = 'کد ملی جدید خود را وارد کنید'
    }

    if (!values.address) {
      errors.address = 'آدرس جدید خود را وارد کنید'
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
      <div className="container">
        <div className="row d-flex flex-column align-items-center">
          <div className="col-6">
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
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateEmployee
