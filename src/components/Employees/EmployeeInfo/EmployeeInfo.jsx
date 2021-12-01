import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Img from "../../../assets/images/avatars/2.jpg";
import { removeItem } from "../../../core/services/storage/storage";
import GetEmployeeById from "../../../core/services/api/GetEmployeeById.api";
import "./EmployeeInfo.css";
import User from "src/core/context/UserContext/UserContext";

const EmployeeInfo = () => {
  const [EmployeeByIdData, setEmployeeByIdData] = useState([]);
  const user = useContext(User);
  console.log(user);

  const getEmployeeById = async () => {
    const id = user.user._id;
    console.log(id);
    const result = await GetEmployeeById(id);
    setEmployeeByIdData(result);
  };

  const history = useLocation();
  console.log(history);
  const history2 = useHistory();

  const logOut = () => {
    user.setUser(null);
    removeItem("token");
    history2.push("/login");
  };

  const GoToUpdate = () => {
    history2.push("/update-info");
  };

  useEffect(() => {
    getEmployeeById();
  }, []);
  return (
    <>
      <div className="employee-info white-background">
        <div className="img-container">
          <img className="info-img" src={Img} />
        </div>

        <div className="employee-detail">
          <p className="username">{`نام کاربری : ${EmployeeByIdData.fullName}`}</p>
          <p className="email">{`ایمیل : ${EmployeeByIdData.email}`}</p>
          <p className="phonenumber">{`شماره موبایل : ${EmployeeByIdData.phoneNumber}`}</p>
          <p className="address">{`آدرس : ${EmployeeByIdData.address}`}</p>
          <p className="birthday">{`تاریخ تولد : ${EmployeeByIdData.birthDate}`}</p>
          <p className="national">{`کد ملی : ${EmployeeByIdData.nationalId}`}</p>
          <p className="role">{`نقش : ${EmployeeByIdData.role}`}</p>
        </div>

        <div className="buttons d-flex flex-column align-items-center justify-content-center">
          <button
            onClick={() => GoToUpdate()}
            className="btn btn-primary edit-btn"
          >
            ویرایش
          </button>
          <button
            onClick={() => logOut()}
            className="btn btn-danger exit-btn mt-3"
          >
            خروج از حساب
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeInfo;
