import axios from "axios";
const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const CreateCourse = async (coursePostData) => {
  try {
    return  await axios.post(`${MainUrl}api/course/add`, coursePostData);

  } catch (error) {
    console.log(error);
  }
};

export default CreateCourse;
