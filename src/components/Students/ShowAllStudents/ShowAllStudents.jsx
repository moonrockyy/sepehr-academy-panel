import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import IconButton from '@mui/material/IconButton'
import GetAllStudents from '../../../core/services/api/GetAllStudents'
import DeleteStudents from '../../../core/services/api/DeleteStudents.api'
import './showAllStudents.css'

const ShowAllStudents = () => {
  const [allStudentsData, setAllStudentsData] = useState([])

  const getStudents = async () => {
    const result = await GetAllStudents()
    setAllStudentsData(result)
  }

  useEffect(() => {
    getStudents()
  }, [allStudentsData])

  const DeleteStudentById = async (student) => {
    const id = student._id
    await DeleteStudents(id)
    toast.success("کاربر با موفقیت حذف شد")
  }

  return (
    <>
      <div className="course-body mt-4">
        <div className="mainDiv container mt-4 mb-5">
          <h4>{'همه دانش آموزان'}</h4>
        </div>
        <table className="table panel-table table-borderless ">
          <thead className={'thead-color'}>
            <tr className={'tr-color'}>
              <th scope="col">نام دانش آموز</th>
              <th scope="col">ایمیل</th>
              <th scope="col">شماره موبایل</th>
              <th>تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {allStudentsData.length > 0 &&
              allStudentsData.map((student, index) => (
                <tr key={index} className={'green-hover'}>
                  <td scope="row" className={'course-td-items-topics'}>
                    {student.fullName}
                  </td>
                  <td scope="row" className={'course-td-items'}>
                    {student.email}
                  </td>
                  <td scope="row" className={'course-th-items'}>
                    {student.phoneNumber}
                  </td>

                  <td scope="row" className={'course-th-items'}>
                    <IconButton onClick={() => DeleteStudentById(student)}>
                      <DeleteTwoToneIcon
                        className={'delete-color'}
                      />
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

export default ShowAllStudents
