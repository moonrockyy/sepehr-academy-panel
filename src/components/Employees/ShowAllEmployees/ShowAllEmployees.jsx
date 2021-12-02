import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify'
import GetAllEmployees from '../../../core/services/api/GetAllEmployees.api'
import DeleteEmployee from '../../../core/services/api/DeleteEmployee.api'
import { ToastContainer } from 'react-toastify'
import { getItem } from '../../../core/services/storage/storage'
import './showAllEmployees.css'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import IconButton from '@mui/material/IconButton'

const ShowAlladmins = () => {
  const [allEmployeesData, setAllEmployeesData] = useState([])

  const getEmployees = async () => {
    const result = await GetAllEmployees()
    setAllEmployeesData(result)
  }

  const DeleteEmployeeById = async () => {
    const token = getItem('token')
    const id = jwt_decode(token)._id
    const result = await DeleteEmployee(id)
    toast.success(result.message)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={2000} rtl={true} />
      <div className="course-body mt-4">
        <div className="mainDiv container mt-4 mb-5">
          <h4>{'همه کارکنان'}</h4>
        </div>
        <table className="table panel-table table-borderless ">
          <thead className={'thead-color'}>
            <tr className={'tr-color'}>
              <th scope="col">نام کاربر</th>
              <th scope="col">ایمیل</th>
              <th scope="col">شماره موبایل</th>
              <th>تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {allEmployeesData.map((admin, index) => (
              <tr key={index} className={'green-hover'}>
                <td scope="row" className={'course-td-items-topics'}>
                  {admin.fullName}
                </td>
                <td scope="row" className={'course-td-items'}>
                  {admin.email}
                </td>
                <td scope="row" className={'course-th-items'}>
                  {admin.phoneNumber}
                </td>

                <td scope="row" className={'course-th-items'}>
                  <IconButton  onClick={() => DeleteEmployeeById()}>
                    <DeleteTwoToneIcon className={'delete-color-admin'}/>
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ShowAlladmins
