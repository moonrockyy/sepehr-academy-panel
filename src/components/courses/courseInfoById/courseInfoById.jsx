import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import GetCourseById from "../../../core/services/api/courses/getCourseById.api"
import "./courseInfoById.css"
import DeleteCourseById from "../../../core/services/api/courses/deleteCourseById.api";
import {toast, ToastContainer} from "react-toastify";
import CourseInfoForm from "./courseInfoForm/courseInfoForm";

const CourseInfoById = () => {

  const {id} = useParams();
  const history = useHistory()

  const [courseByIdData, setCourseByIdData] = useState([]);

  const getCourseById = async () => {
    const result = await GetCourseById(id);
    setCourseByIdData(result);
  };
  const deleteCourseById = async () => {
    const result = await DeleteCourseById(id)
    toast.success(result.data.message[0].message);
    setTimeout(() => {
      {
        result && history.push('/all-courses')
      }
    }, 2500)
  }
  const handleDeleteCourse = () => {
    deleteCourseById();
  }
  useEffect(() => {
    getCourseById();
  }, []);



  return (
    <>
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={3000}
        rtl={true}
      />
     <CourseInfoForm courseByIdData={courseByIdData} handleDeleteCourse={handleDeleteCourse}/>
    </>
  );
};

export default CourseInfoById;
