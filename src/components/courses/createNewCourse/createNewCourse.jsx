import React, {useEffect, useState} from 'react';
import "../../searchBox/serachbox.css"
import "./createNewCourse.css"
import {useFormik} from "formik";
import {ToastContainer} from "react-toastify";
import cloud from "../../../assets/images/cloud-computing.png"

const CreateNewCourse = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }
  const initialValues = {
    courseName: "",
    topics: [],
    description: "",
    image: "",
  };

  const onSubmit = async (values) => {
    const coursePostData = {
      courseName: values.courseName,
      topics: values.topics,
      description: values.description,
      image: values.image,
    };
    console.log(coursePostData)
    // const result = await CreateTerm(coursePostData);
    console.log("what the f")
  }

  const validate = (values) => {
    let errors = {};

    if (!values.courseName) {
      errors.courseName = "عنوان دوره را وارد کنید";
    }

    if (!values.topics) {
      errors.topics = "موضوع دوره را وارد کنید";
    }

    if (!values.description) {
      errors.description = "توضیحات دوره را وارد کنید";
    }

    if (!values.image) {
      errors.image = "";
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
                  {"ساخت یک دوره جدید"}
              </span>
            </div>
            <div className="row mb-4 pt-4">
              <div className="col pt-2">
                <input className="form-control me-2 Search-box" type="text"
                       placeholder={"عنوان دوره"}
                       aria-label="courseName"
                       id={"courseName"}
                       name="courseName"
                       onChange={formik.handleChange}
                       value={formik.values.courseName}
                       onBlur={formik.handleBlur}
                       autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.courseName && formik.errors.courseName ? (
                    <div>{formik.errors.courseName}</div>
                  ) : null}
                </div>
              </div>
              <div className="col pt-2">
                <input className="form-control me-2 Search-box" type="text"
                       placeholder={"موضوع دوره"}
                       aria-label="courseTopics"
                       id={"courseTopics"}
                       name="topics"
                       onChange={formik.handleChange}
                       value={formik.values.topics}
                       onBlur={formik.handleBlur}
                       autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.topics && formik.errors.topics ? (
                    <div>{formik.errors.topics}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"/>
                <textarea className="form-control text-aria" id="exampleFormControlTextarea1" rows="3"
                          placeholder={"توضیحات دوره"}
                          aria-label="courseDescription"
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                />
                <div className="text-danger mt-1 pe-2">
                  {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>
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
                    <input className="form-control visibility-none" onChange={onSelectFile}  type="file" id="formFile"
                           aria-label="upload"/>
                  </button>
                  <span className={"upload-text-2"}> تصویر خود را بارگذاری کنید...</span>
                  <div className={"d-flex justify-content-center uploaded-img-position"}>
                    {selectedFile &&  <img className={"uploaded-img"} width={200} src={preview}  alt={""}/> }
                  </div>
                </div>
              </div>


            </div>
            <div className={"row mt-4 mb-3 me-2"}>
              <button className={" btn-green btn btn-hover"} type={"submit"}>ثبت</button>
              <button className={" btn-blue btn me-2 mb-3 btn-hover"}> ریست</button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default CreateNewCourse;
