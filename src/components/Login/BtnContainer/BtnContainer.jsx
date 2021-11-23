import React from "react";
import { Link } from "react-router-dom";

const BtnContainer = () => {
  return (
    <div className="btn-container mb-1 d-inline-flex flex-wrap justify-content-center rounded-pill">
      <Link to="/register">
        <button className={`btn m-1 rounded-pill text-white`}>ثبت نام</button>
      </Link>

      <button className={`btn m-1 rounded-pill text-dark bg-white`}>
        ورود ادمین
      </button>
    </div>
  );
};

export default BtnContainer;
