import Axios from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetEmployeeById = async (id) => {
    try {
        const result = await Axios.get(`${MainUrl}api/employee/${id}`)
        return result.data.result;
    } catch {
        return {};
    }
};
export default GetEmployeeById;