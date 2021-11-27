import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const DeleteNewsById = async (id) => {
  try {
    return await Axios.delete(`${MainUrl}api/news/${id}`)
  } catch (err) {
    console.log(err)
    return {};
  }
};
export default DeleteNewsById;
