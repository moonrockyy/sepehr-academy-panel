import React, {useEffect, useState} from 'react';
import GetAllCourses from "../../../core/services/api/courses/getAllCourses.api";
import "./showAllCourses.css";
import ShowAllCourseTable from "./showAllCourseTable/showAllCourseTable";

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
        <ShowAllCourseTable allCourseData={allCoursesData}/>
      </div>
    </>
  );
};

export default ShowAllCourses;
