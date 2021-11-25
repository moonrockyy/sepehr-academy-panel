import Axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const GetAllStudents = async () => {
  try {
    const result = await Axios.get(`${MainUrl}api/student/getall`);
    console.log(result.data.result);
    return result.data.result;
  }
  catch (error) {
    console.log(error);
    return {};
  }
};

export default GetAllStudents;