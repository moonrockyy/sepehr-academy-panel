import Axios from 'axios'
import { toast } from 'react-toastify'

export const VerifyComments = async (id) => {
  try {
    const result = await Axios.post(`https://academy-reaction.herokuapp.com/api/comment/verify`, {
      id: `${id}`,
    })
    toast.success(result.message)

    return result.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default VerifyComments
