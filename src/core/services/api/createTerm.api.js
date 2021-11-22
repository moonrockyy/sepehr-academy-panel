import { toast } from "react-toastify";
import axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const CreateTerm = async (termPostData) => {
  try {
    const result = await axios.post(`${MainUrl}api/term/`, termPostData);
    toast.success("اطلاعات ترم با موفقیت ارسال شد");

    return result.data.result;
  } catch (error) {
    console.log(error);
    // toast.error(error.response.data.message[0].message);
  }
};

export default CreateTerm;
