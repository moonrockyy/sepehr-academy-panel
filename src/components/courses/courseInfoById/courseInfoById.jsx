import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import GetCourseById from "../../../core/services/api/courses/getCourseById.api"
import "./courseInfoById.css"
import lineImage from "../../../assets/images/Component 8 – 1.png"
import DeleteCourseById from "../../../core/services/api/courses/deleteCourseById.api";
import {toast, ToastContainer} from "react-toastify";

const CourseInfoById = () => {

  const {id} = useParams();

  const [courseByIdData, setCourseByIdData] = useState([]);

  const getCourseById = async () => {
    const result = await GetCourseById(id);
    setCourseByIdData(result);
  };
  const deleteCourseById = async () => {
    const result = await DeleteCourseById(id)
    toast.success(result.data.message[0].message);
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
      <div className={"d-flex justify-content-center mt-5"}>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card mb-5">
            <img src={courseByIdData.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {courseByIdData.courseName} </h5>
              <p className="card-text">
                <div className="mt-2">
                  <span
                    className="course-teacher col-sm-4 me-1 ">{courseByIdData.description}</span>
                  <div className="row">
                    <div className="col-sm-12">
                      <img src={lineImage} className="card-line"
                           alt=""/>
                    </div>
                  </div>
                  <div className="card-end">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <span
                          className="card-time me-1">
                          <Link to={"/"}>
                             <button className={"btn btn-success btn-sm  text-light"}> برگشت به خانه </button>
                          </Link>
                        </span>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="d-flex justify-content-end">
                                                        <span
                                                          className="card-price">
                                                          <div>
                                                          <button onClick={handleDeleteCourse}
                                                                  className={"btn btn-danger btn-sm  text-light"}> حذف دوره </button>
                                                          </div>
                                                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfoById;
