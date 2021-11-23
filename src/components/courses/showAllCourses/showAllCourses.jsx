import React, {useEffect, useState} from 'react';
import GetAllCourses from "../../../core/services/api/getAllCourses.api";
import {Link} from "react-router-dom";
import "./showAllCourses.css"
import userIcon from "../../../assets/images/user light blue.png"
import lineImage from "../../../assets/images/Component 8 – 1.png"
import stopWatch from "../../../assets/images/stopwatch.png"
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
        <div className="row">
          {Object.entries(allCoursesData).map(item => <div key={item} className="col-sm-12 col-md-6 col-lg-3">
            <div className="card mb-5">
              <img src={item[1].image} className="card-img-top" alt="..."/>
              <div className="card-body">

                <Link className={"decoration-none"} to={`/course/${item[1]._id}`}>

                  <h5 className="card-title"> {item[1].courseName} </h5>
                </Link>
                <p className="card-text">
                  <div className="mt-2">
                    <img className="card-user-image col-8" src={userIcon}
                         alt=""/>
                    <span
                      className="course-teacher col-sm-4 me-1 ">{item[1].description}</span>
                    <div className="row">
                      <div className="col-sm-12">
                        <img src={lineImage} className="card-line"
                             alt=""/>
                      </div>
                    </div>
                    <div className="card-end">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <img src={stopWatch} className="card-stopwatch"
                               alt=""/>
                          <span
                            className="card-time me-1">{"7:28:00"}</span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="d-flex justify-content-end">
                                                        <span
                                                          className="card-price"> {"5000 تومان"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>)}
        </div>
      </div>

    </>
  );
};

export default ShowAllCourses;
