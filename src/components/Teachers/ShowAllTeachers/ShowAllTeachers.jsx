import React, { useState, useEffect } from 'react'
import GetAllTeachers from '../../../core/services/api/GetAllTeachers.api'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import IconButton from '@mui/material/IconButton'
import './showAllTeachers.css'

const ShowAlladmins = () => {
  const [allTeachersData, setAllTeachersData] = useState([])

  const getTeachers = async () => {
    const result = await GetAllTeachers()
    setAllTeachersData(result)
  }
  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <>
      <div className="course-body mt-4">
        <div className="mainDiv container mt-4 mb-5">
          <h4>{'همه معلم ها'}</h4>
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
            {allTeachersData.map((admin) => (
              <tr key={admin._id} className={'green-hover'}>
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
                  <IconButton>
                    <DeleteTwoToneIcon className={'delete-color'} />
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
