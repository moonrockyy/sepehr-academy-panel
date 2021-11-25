import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const CreateNews = async (newsPostData) => {
  try {
    return  await axios.post(`${MainUrl}api/news/`, newsPostData);

  } catch (error) {
    console.log(error);
  }
};

export default CreateNews;
