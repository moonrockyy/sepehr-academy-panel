import React, {useEffect, useState} from 'react';
import "./showAllNews.css"
import GetAllNews from "../../../core/services/api/getAllNews.api";

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
        </tr>
        </thead>
        <tbody>
        {Object.entries(allNewsData).map(item => <tr key={item._id} className={"green-hover"}>
          <th scope="row" className={"panel-th-items"}>{item[1].title}</th>
          <td className={"panel-td-items"}>{item[1].text} </td>
          <td className={"panel-td-items"}>
            <img className={"table-news-img"} src={item[1].image} alt=""/>
            </td>
        </tr>)}

        </tbody>
      </table>
    </>
  );
};

export default ShowAllNews;
