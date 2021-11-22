import React, {useEffect, useState} from 'react';
import "./serachbox.css"
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

const SearchBox = (props) => {

    const [searchData, setSearchData] = useState([]);
    const [searchBlog, setSearchBlog] = useState([]);

    const getCourses = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/course')
            .then((response) => {
                // console.log(response.data.result);
                const myCourses = response.data.result;
                setSearchData(myCourses);
            });
    }
    const getBlog = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/news')
            .then((res) => {
                const myBlog = res.data.result;
                setSearchBlog(myBlog);
            });

    }


    useEffect(() => getCourses(), []);
    useEffect(() => getBlog(), []);


    const [filteredDataForBlog, setFilteredDataForBlog] = useState([]);
    const [filteredDataForCourses, setFilteredDataForCourses] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;


        setWordEntered(searchWord);
        const Filter1 = searchData.filter((value) => {

            return value.courseName.toLowerCase().includes(searchWord.toLowerCase())

        });

        const filter2 = searchBlog.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        });

        // const newFilter = [...Filter1,...filter2];

        if (searchWord === "") {
            setFilteredDataForBlog([]);
            setFilteredDataForCourses([]);

        } else {
            setFilteredDataForBlog(filter2);
            setFilteredDataForCourses(Filter1);
        }
    };

    const clearInput = () => {
        setFilteredDataForBlog([]);
        setFilteredDataForCourses([]);
        setWordEntered("");
    };


    // const handleEmpty = ()




    return (

        <div className="searchForHomePage  me-2">

            <div className="searchInputs ">
                <input
                    className={"inputTag"}
                    type="text"
                    placeholder={props.placeHolder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon ">
                    {filteredDataForBlog.length === 0 && filteredDataForCourses.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>


            {filteredDataForBlog.length != 0 || filteredDataForCourses.length != 0 ? (
                <div className={"controllerForHomePage"}>
                    <div className="dataResult">

                        {filteredDataForBlog.slice(0, 5).map((value, key) => {
                            return (
                                <>
                                    <p className={"titleHeader"}>مقاله</p>
                                    <div className={"holder"}>
                                        <Link to={"/blog/maghale/" + value._id}>

                                            <img className={"itemsImg"} src={value.image} alt={""}/>


                                            <a className="dataItem" target="_blank">
                                                <p>{value.title} </p>
                                            </a>

                                        </Link>
                                    </div>

                                    {filteredDataForCourses.map((value,) => {
                                        return (
                                            <>
                                                <p className={"titleHeader"}>دوره</p>
                                                <div className={"holder"}>
                                                    <Link to={"/course/" + value._id}>
                                                        <img className={"itemsImg"} src={value.image} alt={""}/>
                                                        <a className="dataItem" target="_blank">
                                                            <p>{value.courseName}</p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })}

                                </>
                            );
                        })}
                    </div>
                </div>
            ) : <></>}
        </div>
    );
};

export default SearchBox;
