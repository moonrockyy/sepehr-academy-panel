import axios from "axios";
import {toast} from "react-toastify";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateTerm = async (termUpdateData, id) => {
  try {
    return await axios.put(`${MainUrl}api/term/${id}`, termUpdateData);

  } catch (error) {
    console.log(error);
  }
};

export default UpdateTerm;
