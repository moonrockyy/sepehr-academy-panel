import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Img from '../../../assets/images/avatars/2.jpg'
import { clearStorage, getItem } from '../../../core/services/storage/storage'
import jwt_decode from 'jwt-decode'
import GetEmployeeById from '../../../core/services/api/GetEmployeeById.api'
import './EmployeeInfo.css'

const EmployeeInfo = () => {
  const [EmployeeByIdData, setEmployeeByIdData] = useState([])

  const getEmployeeById = async () => {
    const token = getItem('token')
    const id = jwt_decode(token)._id
    const result = await GetEmployeeById(id)
    setEmployeeByIdData(result)
  }

  const history = useHistory()

  const logOut = () => {
    clearStorage()
    history.push('/login')
  }

  const GoToUpdate = () => {
    history.push('/update-info')
  }

  useEffect(() => {
    getEmployeeById()
  }, [])
  return (
    <>
      <div className="employee-info white-background">
        <div className="img-container">
          <img className="info-img" src={Img} />
        </div>

        <div className="employee-detail">
          <p className="username">{`نام کاربری : ${EmployeeByIdData.fullName}`}</p>
          <p className="email">{`ایمیل : ${EmployeeByIdData.email}`}</p>
          <p className="phonenumber">{`شماره موبایل : ${EmployeeByIdData.phoneNumber}`}</p>
          <p className="address">{`آدرس : ${EmployeeByIdData.address}`}</p>
          <p className="birthday">{`تاریخ تولد : ${EmployeeByIdData.birthDate}`}</p>
          <p className="national">{`کد ملی : ${EmployeeByIdData.nationalId}`}</p>
          <p className="role">{`نقش : ${EmployeeByIdData.role}`}</p>
        </div>

        <div className="buttons d-flex flex-column align-items-center justify-content-center">
          <button onClick={() => GoToUpdate()} className="btn btn-primary edit-btn">
            ویرایش
          </button>
          <button onClick={() => logOut()} className="btn btn-danger exit-btn mt-3">
            خروج از حساب
          </button>
        </div>
      </div>
    </>
  )
}

export default EmployeeInfo
