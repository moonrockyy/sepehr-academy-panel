import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import GetNewsById from "../../../core/services/api/news/getNewsById.api";
import "./newInfoById.css"
import DeleteNewsById from "../../../core/services/api/news/deleteNewsById.api";
import {toast, ToastContainer} from "react-toastify";

const NewsInfoById = () => {
  const {id} = useParams();
  const [newsByIdData, setNewsByIdData] = useState([]);

  const newsById = async () => {
    const result = await GetNewsById(id);
    setNewsByIdData(result);
  };
  const deleteNewsById = async () => {
    const result = await DeleteNewsById(id)
    console.log(result)
    toast.success(result.data.message[0].message);
  }
  const handleDeleteNews = () => {
    deleteNewsById();
  }
  useEffect(() => {
    newsById();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={3000}
        rtl={true}
      />
      <div className="card mb-3 main">
        <img src={newsByIdData.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title-news">{newsByIdData.title}</h5>
          <p className="card-text-news">{newsByIdData.text} </p>
          <div className={"row"}>
            <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
            <div className={"col-4"}>
              <Link to={"/dashboard"}>
                <button className={"btn btn-outline-success mb-3"}>داشبورد</button>
              </Link>
            </div>
            <div className={"col-4 btn-delete-position"}>
              <button onClick={handleDeleteNews} className={"btn btn-outline-danger mb-2"}> حذف مقاله</button>
            </div>
            <div className={"d-flex justify-content-end"}>
              <span className="badge bg-primary ">{newsByIdData.category}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewsInfoById;
