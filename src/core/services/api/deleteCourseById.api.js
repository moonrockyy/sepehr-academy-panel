import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const DeleteCourseById = async (id) => {
  try {
    return await Axios.delete(`${MainUrl}api/course/${id}`)
  } catch (err) {
    console.log(err)
    return {};
  }
};
export default DeleteCourseById;
