import Axios from 'axios'
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

export const GetAllComments = async () => {
  try {
    const result = await Axios.get(`https://academy-reaction.herokuapp.com/api/comment/`)
    console.log(result.data)

    return result.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default GetAllComments
