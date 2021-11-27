import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateNews = async (newsUpdateData,id) => {
  try {
    return  await axios.put(`${MainUrl}api/news/${id}`, newsUpdateData);

  } catch (error) {
    console.log(error);
  }
};

export default UpdateNews;
