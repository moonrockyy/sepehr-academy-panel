import axios from 'axios'
import { toast } from 'react-toastify'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const UpdateInfo = async (userUpdate, id) => {
  try {
    const result = await axios.put(`${MainUrl}api/employee/${id}`, userUpdate)
    toast.success("آطلاعات شما با موفقیت تغییر یافت")
    return result.data.result
  } catch (error) {
    console.log(error)
  }
}

export default UpdateInfo
