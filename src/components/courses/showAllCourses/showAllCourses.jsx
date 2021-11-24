import React, {useEffect, useState} from 'react';
import GetAllCourses from "../../../core/services/api/getAllCourses.api";
import "./showAllCourses.css";
const ShowAllCourses = () => {
  const [allCoursesData, setAllCoursesData] = useState([]);

  const getCourses = async () => {
    const result = await GetAllCourses();
    setAllCoursesData(result);
  };
  useEffect(() => {
    getCourses();
  }, []);

  console.log(allCoursesData)
  return (
    <>
      <div className="course-body mt-4">
        <div className={"mainDiv container mt-4 mb-5"}>

          <h4>{"همه ی دوره ها"} </h4>
        </div>
        <table className="table panel-table table-borderless ">
          <thead className={"thead-color"}>
          <tr className={"tr-color"}>
            <th scope="col ">نام دوره</th>
            <th scope="col ">موضوع دوره</th>
            <th scope="col ">توضیحات دوره</th>
            <th scope="col "> تصویر دوره</th>
          </tr>
          </thead>
          <tbody>
          {Object.entries(allCoursesData).map(item => <tr key={item._id} className={"green-hover"}>
            <th scope="row" className={"course-th-items"}>
              {item[1].courseName}
            </th>
            <td className={"course-td-items-topics"}> {item[1].topics[0]}</td>
            <td className={"course-td-items"}> {item[1].description}</td>
            <td className={"course-td-items"}>
              <img className={"course-img"} src={item[1].image} alt=""/>
            </td>
          </tr>)}

          </tbody>
        </table>
      </div>

    </>
  );
};

export default ShowAllCourses;
