import http from "../interceptor/interceptor";
import { setItem } from "../storage/storage";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const RegisterUser = async (userRegister) => {
  try {
    const result = await http.post(`${MainUrl}api/auth/register`, userRegister);

    const token = result.data.result.jwtToken;
    setItem("token", token);

    toast.success("ثبت نام شما با موفقیت انجام شد");

    return result.data.result;
  } catch (error) {
    console.log(error.response.data.message[0].message);
    toast.error(error.response.data.message[0].message);
  }
};

export default RegisterUser;
