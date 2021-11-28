import React from "react";
import BtnContainer from "../../components/Register/BtnContainer/BtnContainer";
import RegisterImg from "../../components/Register/RegisterImg/RegisterImg";
import RegisterTitle from "../../components/Register/RegisterTitle/RegisterTitle";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";
import "../../components/Register/Register.css";

const Register = () => {
  return (
    <div className="container register-container mt-4">
      <div className="row p-1">
        <div className="col-lg-12 col-xl-7 order-xl-last d-flex justify-content-center">
          <RegisterImg />
        </div>
        <div className="order-xl-first col-lg-12 col-xl-5 p-4 mt-4 d-flex flex-column login-form">
          <BtnContainer />
          <RegisterTitle />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
