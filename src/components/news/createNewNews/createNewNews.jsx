import React, {useEffect, useState} from 'react';
import "../../searchBox/serachbox.css"
import "./createNewNews.css"
import {useFormik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import cloud from "../../../assets/images/cloud-computing.png"
import PostImage from "../../../core/services/api/uploadImg/postImage.api";
import CreateNews from "../../../core/services/api/news/createNews.api";

const CreateNewNews = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [imageAddress, setImageAddress] = useState("")
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }
  const initialValues = {
    title: "",
    category: "",
    image: imageAddress,
    text: "",
  };

  const handleClick = async () => {
    try {
      const result = await PostImage();
      console.log(result.data.result)
      setImageAddress(result.data.result)
      console.log(imageAddress)
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = async (values) => {
    const newsPostData = {
      title: values.title,
      category: values.category,
      image: imageAddress,
      text: values.text,
    };
    const result = await CreateNews(newsPostData);
    console.log(newsPostData)
    console.log(result);
    toast.success(result.data.message[0].message);
  }

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "عنوان مقاله را وارد کنید";
    }

    if (!values.category) {
      errors.category = " دسته بندی مقاله را وارد کنید ";
    }

    if (!values.text) {
      errors.text = "توضیحات مقاله را وارد کنید";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


  return (
    <>
      <div className={"white-background"}>
        <div className={"container"}>
          <ToastContainer
            position="top-center"
            limit={1}
            autoClose={3000}
            rtl={true}
          />
          <form onSubmit={formik.handleSubmit}>
            <div className={"row mb-5 mt-3"}>
               <span className="panel-title">
                  {"ساخت یک مقاله جدید"}
              </span>
            </div>
            <div className="row mb-4 pt-4">
              <div className="col pt-2">
                <input className="form-control me-2 Search-box" type="text"
                       placeholder={"عنوان مقاله"}
                       aria-label="title"
                       id={"title"}
                       name="title"
                       onChange={formik.handleChange}
                       value={formik.values.title}
                       onBlur={formik.handleBlur}
                       autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                  ) : null}
                </div>
              </div>
              <div className="col pt-2">
                <input className="form-control me-2 Search-box" type="text"
                       placeholder={"دسته بندی مقاله"}
                       aria-label="category"
                       id={"category"}
                       name="category"
                       onChange={formik.handleChange}
                       value={formik.values.category}
                       onBlur={formik.handleBlur}
                       autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.category && formik.errors.category ? (
                    <div>{formik.errors.category}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea2" className="form-label"/>
                <textarea className="form-control text-aria" id="exampleFormControlTextarea2" rows="3"
                          placeholder={"توضیحات مقاله"}
                          aria-label="text"
                          name="text"
                          onChange={formik.handleChange}
                          value={formik.values.text}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.text && formik.errors.text ? (
                    <div>{formik.errors.text}</div>
                  ) : null}
                </div>
              </div>

            </div>
            <div className={"row"}>
              <div className={"col-sm-9"}>
                <div className="mb-3">
                  <button className={"btn btn-upload"}>
                    <span className={"upload-avatar-text"}>آپلود تصویر</span>
                    <img className={"upload-icon"} src={cloud} alt="cloud"/>
                    <input className="form-control visibility-none" onChange={onSelectFile} type="file" id="formFile"
                           aria-label="upload"
                    />
                  </button>
                  <button onClick={handleClick} type={"button"}
                          className={"upload-text-2 btn btn-primary text-light"}> بارگذاری کنید
                  </button>
                </div>
                <div className={"me-3 mb-4"}>
                  {selectedFile && <img className={"uploaded-img"} width={200} src={preview} alt={""}/>}
                </div>
              </div>
            </div>
            <div className={"row mt-4 mb-3 me-2"}>
              <div className={"d-flex justify-content-center"}>
                <div>
                  <button className={" btn-green btn btn-hover"} type={"submit"}>ثبت</button>
                </div>
                <button className={" btn-blue btn me-2 mb-3 btn-hover"}> ریست</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default CreateNewNews;
