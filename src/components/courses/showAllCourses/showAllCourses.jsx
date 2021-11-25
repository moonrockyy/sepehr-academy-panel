import React, {useEffect, useState} from 'react';
import GetAllCourses from "../../../core/services/api/getAllCourses.api";
import "./showAllCourses.css";
import {Link} from "react-router-dom";

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
            <th scope="col ">تنظیمات</th>
          </tr>
          </thead>
          <tbody>
          {Object.entries(allCoursesData).map(item => <tr key={item._id} className={"green-hover"}>
              <Link to={`/course-info/${item[1]._id}`}>
                <th scope="row" className={"course-th-items"}>
                  {item[1].courseName}
                </th>
              </Link>
              <td className={"course-td-items-topics"}> {item[1].topics[0]}</td>
              <td className={"course-td-items"}> {item[1].description}</td>
              <td className={"course-td-items"}>
                <img className={"course-img"} src={item[1].image} alt=""/>
              </td>
              <td className={"course-td-btn"}>
                <Link to={`/course-info/${item[1]._id}`}>
                  <button className={"btn btn-outline-danger btn-sm "}> حذف </button>
                </Link>
              </td>
            </tr>
          )}

          </tbody>
        </table>
      </div>

    </>
  );
};

export default ShowAllCourses;
