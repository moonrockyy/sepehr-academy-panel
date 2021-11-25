import http from '../interceptor/interceptor'
import { setItem } from '../storage/storage'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const LoginUser = async (userLogin) => {
  try {
    const result = await http.post(`${MainUrl}api/auth/employee/login`, userLogin)

    const token = result.data.result.jwtToken
    setItem('token', token)

    const decode = jwt_decode(token)
    setItem('role', decode.role)

    toast.success('شما با موفقیت وارد شدید')

    return result.data.result
  } catch (error) {
    toast.error(error.response.data.message.message[0].message)
  }
}

export default LoginUser
