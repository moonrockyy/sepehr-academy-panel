import Axios from 'axios'
import { toast } from 'react-toastify'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH
const DeleteNewsById = async (id) => {
  try {
    const result = await Axios.delete(`${MainUrl}api/employee/${id}`)
    toast.success('کاربر با موفقیت حذف شد')
    return result.data.result
  } catch (err) {
    console.log(err)
    return {}
  }
}
export default DeleteNewsById
