import React from 'react';
import NewsInfoById from "../newsInfoById/newsInfoById";
import UpdateNewsData from "./updateNewsData";
import "../showAllNews/showAllNews.css"

const UpdateNewsById = () => {
  return (
    <>
      <div className={"mainDiv container mt-4 mb-5"}>
        <h4>{"بروزرسانی اطلاعات مقاله"} </h4>
      </div>
      <NewsInfoById/>
      <UpdateNewsData/>
    </>
  );
};

export default UpdateNewsById;
