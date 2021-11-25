import React, {useEffect, useState} from 'react';
import GetAllTerms from "../../../core/services/api/terms/getAllTerms.api";
import "./showAllTerms.css"
import {FaUsers} from "react-icons/all";

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
        <tr className={"tr-color"}>
          <th scope="col ">نام ترم</th>
          <th scope="col ">موضوع ترم</th>
          <th scope="col ">نام دوره</th>
          <th scope="col ">مدرس</th>
          <th scope="col ">ایمیل مدرس</th>
          <th scope="col "> ظرفیت</th>
          <th scope="col "> قیمت ترم</th>
          <th scope="col "> دانشجوها</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(allTermsData).map(item => <tr key={item._id} className={"green-hover"}>
          <th scope="row" className={"panel-th-items"}>{item[1].title}</th>
          <td className={"panel-td-items"}>{item[1].course.topics[1]} </td>
          <td className={"panel-td-items"}>
            <img className={"table-course-img"} src={item[1].course.image} alt=""/>
            {item[1].course.courseName}</td>
          <td className={"panel-td-items"}> {item[1].teacher.fullName}</td>
          <td className={"panel-td-items"}> {item[1].teacher.email}</td>
          <td className={"panel-td-items"}>
            <span className="badge bg-success">{item[1].capacity} </span>
          </td>
          <td className={"panel-td-items"}> {(item[1].cost) + " تومان "}</td>
          <td className={"panel-td-items"}>
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
