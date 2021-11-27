import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import GetCourseById from "../../../core/services/api/courses/getCourseById.api"
import "./courseInfoById.css"
import lineImage from "../../../assets/images/Component 8 – 1.png"
import DeleteCourseById from "../../../core/services/api/courses/deleteCourseById.api";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CourseInfoById = () => {

  const {id} = useParams();

  const [courseByIdData, setCourseByIdData] = useState([]);
  const [deleteCourseData, setDeleteCourseData] = useState([]);
  const [open, setOpen] = useState(false)

  const getCourseById = async () => {
    const result = await GetCourseById(id);
    setCourseByIdData(result);
  };
  const deleteCourseById  = async () => {
    const result = await DeleteCourseById(id)
    setDeleteCourseData(result.data.message[0].message)
  }
  const handleDeleteCourse = () => {
    setOpen(true);
    deleteCourseById();
  }
  useEffect(() => {
    getCourseById();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
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
                                                          <button onClick={handleDeleteCourse} className={"btn btn-danger btn-sm  text-light"}> حذف دوره </button>
                                                          {deleteCourseData && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                              {deleteCourseData}
                                                            </Alert>
                                                          </Snackbar>}
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
