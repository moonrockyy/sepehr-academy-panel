import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import GetNewsById from "../../../core/services/api/news/getNewsById.api";
import "./newInfoById.css"
import DeleteNewsById from "../../../core/services/api/news/deleteNewsById.api";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const NewsInfoById = () => {
  const {id} = useParams();
  const [newsByIdData, setNewsByIdData] = useState([]);
  const [deleteNewsData, setDeleteNewsData] = useState([]);
  const [open, setOpen] = useState(false)

  const newsById = async () => {
    const result = await GetNewsById(id);
    setNewsByIdData(result);
  };
  const deleteNewsById = async () => {
    const result = await DeleteNewsById(id)
    setDeleteNewsData(result.data.message[0].message)
  }
  const handleDeleteNews = () => {
    setOpen(true);
    deleteNewsById();
  }
  useEffect(() => {
    newsById();
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
        <CloseIcon fontSize="small"/>
      </IconButton>
    </React.Fragment>
  );
  console.log(deleteNewsData)
  return (
    <>
      <div className="card mb-3 main">
        <img src={newsByIdData.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{newsByIdData.title}</h5>
          <p className="card-text">{newsByIdData.text} </p>
          <div className={"row"}>
            <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
            <div className={"col-4"}>
              <Link to={"/dashboard"}>
                <button className={"btn btn-outline-success mb-3"}>داشبورد</button>
              </Link>
            </div>
            <div className={"col-4 btn-delete-position"}>
              <button onClick={handleDeleteNews} className={"btn btn-outline-danger mb-2"}> حذف مقاله</button>
              {deleteNewsData && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                  {deleteNewsData}
                </Alert>
              </Snackbar>}
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
