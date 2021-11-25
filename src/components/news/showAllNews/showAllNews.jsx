import React, {useEffect, useState} from 'react';
import "./showAllNews.css"
import GetAllNews from "../../../core/services/api/getAllNews.api";
import {Link} from "react-router-dom";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ShowAllNews = () => {
  const [allNewsData, setAllNewsData] = useState([]);

  const getNews = async () => {
    const result = await GetAllNews();
    setAllNewsData(result);
  };
  useEffect(() => {
    getNews();
  }, []);

  console.log(allNewsData)
  return (
    <>
      <div className={"mainDiv container mt-4 mb-5"}>
        <h4>{"همه ی مقالات"} </h4>
      </div>
      <table className="table panel-table table-borderless ">
        <thead className={"thead-color"}>
        <tr className={"tr-color"}>
          <th scope="col ">نام مقاله</th>
          <th scope="col ">توضیحات مقاله</th>
          <th scope="col ">تصویر مقاله</th>
          <th scope="col ">تنظیمات</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(allNewsData).map(item => <tr key={item[1]._id} className={"green-hover"}>
          <Link to={`/news-info/${item[1]._id}`}>
            <th scope="row" className={"panel-th-items"}>{item[1].title}</th>
          </Link>
          <td className={"panel-td-items"}>{item[1].text} </td>
          <td className={"panel-td-items"}>
            <img className={"table-news-img"} src={item[1].image} alt=""/>
          </td>
          <td className={"news-btn-icons"}>
            <div className={"row"}>
              <div className={"col-4"}>
                <Tooltip title="edit">
                  <IconButton>
                    <ModeEditTwoToneIcon className={"edit-color"}/>
                  </IconButton>
                </Tooltip>
              </div>
              <div className={"col-4"}>
                <Tooltip title="Delete">
                  <Link to={`/news-info/${item[1]._id}`}>
                    <IconButton>
                      <DeleteTwoToneIcon className={"delete-color"}/>
                    </IconButton>
                  </Link>
                </Tooltip>
              </div>
            </div>
          </td>
        </tr>)}

        </tbody>
      </table>
    </>
  );
};

export default ShowAllNews;
