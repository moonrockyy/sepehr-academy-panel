import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from 'src/core/services/storage/storage'
import jwt_decode from 'jwt-decode'
import GetEmployeeById from '../../../core/services/api/GetEmployeeById.api'
{
}

const EmployeeInfo = () => {
  const token = getItem('token')
  console.log(token);
  const { id } = jwt_decode(token)
  console.log(id);

  const [EmployeeByIdData, setEmployeeByIdData] = useState([])

  const getEmployeeById = async () => {
    const result = await GetEmployeeById(id)
    setEmployeeByIdData(result)
    console.log(result)
  }

  console.log(EmployeeByIdData)

  useEffect(() => {
    getEmployeeById()
  }, [])
  return (
    <>
      <table></table>
    </>
  )
}

export default EmployeeInfo
