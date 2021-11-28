import React from "react";
import { Link } from "react-router-dom";

const BtnContainer = () => {
  return (
    <div className="btn-container mb-1 d-inline-flex flex-wrap justify-content-center rounded-pill">
      <button className={`btn m-1 rounded-pill text-color bg-light`}>
        ثبت نام
      </button>
      <Link to="/login">
        <button className={`btn m-1 rounded-pill text-white`}>
          ورود ادمین
        </button>
      </Link>
    </div>
  );
};

export default BtnContainer;
