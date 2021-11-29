import React from 'react';
import {Link} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const ShowAllCourseTable = (props) => {
  return (
    <>
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
        {Object.entries(props.allCourseData).map(item => <tr key={item._id} className={"green-hover"}>
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
              <div className={"row"}>
                <div className={"col-4"}><Tooltip title="edit">
                  <Link to={`/update-course/${item[1]._id}`}>
                    <IconButton>
                      <ModeEditTwoToneIcon className={"edit-color"}/>
                    </IconButton>
                  </Link>
                </Tooltip></div>
                <div className={"col-3"}><Tooltip title="Delete">
                  <Link to={`/course-info/${item[1]._id}`}>
                    <IconButton>
                      <DeleteTwoToneIcon className={"delete-color"}/>
                    </IconButton>
                  </Link>
                </Tooltip></div>
              </div>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  );
};

export default ShowAllCourseTable;
