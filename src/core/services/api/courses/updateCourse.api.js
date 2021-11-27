import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateCourse = async (courseUpdateData,id) => {
  try {
    return  await axios.put(`${MainUrl}api/course/${id}`, courseUpdateData);

  } catch (error) {
    console.log(error);
  }
};

export default UpdateCourse;
