import React from 'react';
import lineImage from "../../../../assets/images/Component 8 – 1.png";
import {Link} from "react-router-dom";

const CourseInfoForm = (props) => {
  return (
    <>
      <div className={"d-flex justify-content-center mt-5"}>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card mb-5">
            <img src={props.courseByIdData.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {props.courseByIdData.courseName} </h5>
              <div className="card-text">
                <div className="mt-2">
                  <span
                    className="course-teacher col-sm-4 me-1 ">{props.courseByIdData.description}</span>
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
                                                          <button onClick={props.handleDeleteCourse}
                                                                  className={"btn btn-danger btn-sm  text-light"}> حذف دوره </button>
                                                          </div>
                                                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfoForm;
