import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import "../showAllTerms/showAllTerms.css"
import {toast, ToastContainer} from "react-toastify";
import GetTermById from "../../../core/services/api/terms/getTermById.api";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteTermById from "../../../core/services/api/terms/deleteTermById.api";

const TermsInfoById = () => {
  const {id} = useParams();
  const history = useHistory()

  const [termByIdData, setTermByIdData] = useState([]);

  const getTermById = async () => {
    const result = await GetTermById(id);
    setTermByIdData(result);
  };
  const deleteTermById = async () => {
    const result = await DeleteTermById(id)
    console.log(result);
    toast.success(result.data.message[0].message);
    setTimeout(() => {
      result && history.push("/all-terms")
    }, 2500)
  }
  const handleDeleteTerm = () => {
    deleteTermById();
  }
  useEffect(() => {
    getTermById();
  }, []);

  console.log(termByIdData)

  return (
    <>
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={2000}
        rtl={true}
      />
      <table className="table panel-table table-borderless ">
        <thead className={"thead-color"}>
        <tr className={"tr-color"}>
          <th scope="col ">نام ترم</th>
          <th scope="col ">تاریخ پایان ترم</th>
          <th scope="col ">تاریخ شروع ترم</th>
          <th scope="col "> ظرفیت</th>
          <th scope="col "> قیمت ترم</th>
          <th scope="col "> تنظیمات </th>
        </tr>
        </thead>
        <tbody>
        <tr className={"green-hover"}>
          <th scope="row" className={"panel-th-items"}>{termByIdData.title}</th>
          <td className={"panel-td-items"}>
            {termByIdData.endDate}</td>
          <td className={"panel-td-items"}> {termByIdData.startDate}</td>
          <td className={"panel-td-items"}>
            <span className="badge bg-success">{termByIdData.capacity} </span>
          </td>
          <td className={"panel-td-items"}> {(termByIdData.cost) + " تومان "}</td>
          <td className={"course-td-btn"}>
            <Tooltip title="edit">
              <Link to={`/update-term/${termByIdData._id}`}>
                <IconButton>
                  <ModeEditTwoToneIcon className={"edit-color"}/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={handleDeleteTerm}>
                  <DeleteTwoToneIcon className={"delete-color"}/>
                </IconButton>
            </Tooltip>
          </td>
        </tr>
        </tbody>
      </table>
    </>
  );
};

export default TermsInfoById;
