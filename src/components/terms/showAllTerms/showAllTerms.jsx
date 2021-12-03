import React, {useEffect, useState} from 'react';
import GetAllTerms from "../../../core/services/api/terms/getAllTerms.api";
import "./showAllTerms.css"
import {FaUsers} from "react-icons/all";
import {Link} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const ShowAllTerms = () => {
  const [allTermsData, setAllTermsData] = useState([]);

  const getTerms = async () => {
    const result = await GetAllTerms();
    setAllTermsData(result);
  };
  useEffect(() => {
    getTerms();
  }, []);

  console.log(allTermsData)
  return (
    <>
      <div className={"mainDiv container mt-4 mb-5"}>
        <h4>{"همه ی ترم ها"} </h4>
      </div>
      <table className="table panel-table table-borderless ">
        <thead className={"thead-color"}>
        <tr className={"tr-color-term"}>
          <th scope="col ">نام ترم</th>
          <th scope="col ">موضوع ترم</th>
          <th scope="col ">نام دوره</th>
          <th scope="col ">مدرس</th>
          {/*<th scope="col ">ایمیل مدرس</th>*/}
          <th scope="col "> ظرفیت</th>
          <th scope="col "> قیمت ترم</th>
          <th scope="col "> دانشجوها</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(allTermsData).map(item => <tr key={item[1]._id} className={"green-hover"}>
          <th scope="row" className={"panel-th-items-terms"}>
            <Link className={"panel-th-items-terms"} to={`terms-info/${item[1]._id}`}>
              {item[1].title}
            </Link>
          </th>
          <td className={"panel-td-items-terms"}>{item[1].course.topics[0]} </td>
          <td className={"panel-td-items-terms"}>
            <img className={"table-course-img"} src={item[1].course.image} alt=""/>
            {item[1].course.courseName}</td>
          <td className={"panel-td-items-terms"}> {item[1].teacher.fullName}</td>
          {/*<td className={"panel-td-items-terms"}> {item[1].teacher.email}</td>*/}
          <td className={"panel-td-items-terms"}>
            <span className="badge bg-success">{item[1].capacity} </span>
          </td>
          <td className={"panel-td-items-terms"}> {(item[1].cost) + " تومان "}</td>
          <td className={"panel-td-items-terms"}>
            {item[1].students.length + " "}
            <FaUsers/>
          </td>
        </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default ShowAllTerms;
