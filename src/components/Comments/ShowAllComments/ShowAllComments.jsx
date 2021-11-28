import React, { useState, useEffect } from 'react'
import GetAllComments from '../../../core/services/api/GetAllComments.api'
import VerifyComments from '../../../core/services/api/VerifyComments.api'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { ToastContainer, toast } from 'react-toastify'
import DoneIcon from '@mui/icons-material/Done'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import './showAllComments.css'

const ShowAllComments = () => {
  const [allCommentsData, setAllCommentsData] = useState([])

  const getComments = async () => {
    const result = await GetAllComments()
    const falseResult = result.filter((com) => com.verified === false)
    setAllCommentsData(falseResult)
  }
  useEffect(() => {
    getComments()
  }, [])

  const handleDelete = async (comment) => {
    const filterData = allCommentsData.filter((cm) => comment._id !== cm._id)
    setAllCommentsData(filterData)
  }

  const handleVerify = async (comment) => {
    const id = comment._id
    const result = await VerifyComments(id)
    toast.success(result.message)
  }
  return (
    <>
      <ToastContainer position="top-center" limit={1} autoClose={1500} rtl={true} />
      <div className="course-body mt-4">
        <div className="mainDiv container mt-4 mb-5">
          <h4>{'همه نظرات'}</h4>
        </div>
        <table className="table panel-table table-borderless ">
          <thead className={'thead-color'}>
            <tr className={'tr-color'}>
              <th scope="col">نام دانش آموز</th>
              <th scope="col">ایمیل</th>
              <th scope="col">نظر</th>
              <th>تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {allCommentsData.map((comment, index) => (
              <tr key={index} className={'green-hover'}>
                <td scope="row" className={'course-td-items-topics'}>
                  {comment.username}
                </td>
                <td scope="row" className={'course-td-items'}>
                  {comment.email}
                </td>
                <td scope="row" className={'course-th-items'}>
                  {comment.comment}
                </td>

                <td className={'news-btn-icons'}>
                  <div className={'row'}>
                    <div className={'col-4'}>
                      <Tooltip title="پذیرفتن">
                        <IconButton>
                          <DoneIcon
                            onClick={() => handleVerify(comment)}
                            className={'edit-color'}
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className={'col-4'}>
                      <Tooltip title="حذف">
                        <IconButton>
                          <DeleteTwoToneIcon
                            onClick={() => handleDelete(comment)}
                            className={'delete-color'}
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ShowAllComments
