import jwt_decode from "jwt-decode";
import http from "../interceptor/interceptor";
import { getItem } from "../storage/storage";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetUserDetails = async () => {
  if (getItem("token")) {
    const token = getItem("token");
    const decoded = jwt_decode(token);

    const result = await http.get(`${MainUrl}api/student/${decoded._id}`);
    return result.data;
  }
};

export default GetUserDetails;
