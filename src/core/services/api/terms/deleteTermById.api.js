import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const DeleteTermById = async (id) => {
  try {
    return await Axios.delete(`${MainUrl}api/term/${id}`)
  } catch (err) {
    console.log(err)
    return {};
  }
};
export default DeleteTermById;
