import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCourseById = async (id) => {
    try {
        const result = await Axios.get(`${MainUrl}api/course/${id}`)
        return result.data.result;
    } catch {
        return {};
    }
};
export default GetCourseById;