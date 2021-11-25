import {toast} from "react-toastify";
import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const PostImage = async () => {
  try {
    const formData = new FormData();
    const imageFile = document.querySelector('#formFile');
    formData.append("image", imageFile.files[0]);
    return await axios.post(`${MainUrl}api/upload/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export default PostImage;
