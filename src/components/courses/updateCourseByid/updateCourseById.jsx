import React from 'react';
import CourseInfoById from "../courseInfoById/courseInfoById";
import UpdateCourseData from "./updateCourseData";

const UpdateCourseById = () => {
  return (
    <>
      <div className={"mainDiv container mt-4 mb-5"}>
        <h4>{"بروزرسانی اطلاعات دوره"} </h4>
      </div>
      <CourseInfoById/>
      <UpdateCourseData/>
    </>
  );
};

export default UpdateCourseById;
