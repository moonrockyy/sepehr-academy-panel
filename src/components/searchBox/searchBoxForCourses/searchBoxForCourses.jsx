import React, {useEffect, useState} from 'react';
import "./searchBoxForCourses.css";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

const SearchBoxForCourses = (props) => {

    const [searchData, setSearchData] = useState([]);


    const getCourses = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/course')
            .then((response) => {
                console.log(response.data.result);
                const myCourses = response.data.result;
                setSearchData(myCourses);
            });
    }

    useEffect(() => getCourses(), []);


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = searchData.filter((value) => {
            return value.courseName.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };








    return (

        <div className="search  me-2">
            {/*{console.log(searchData)}*/}
            <div className="searchInputs ">
                <input
                    className={"inputTag"}
                    type="text"
                    placeholder={props.placeHolder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon ">
                    {filteredData.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className={"controllerForCourses"}>
                <div className="dataResultForCourses">
                    {filteredData.slice(0, 15).map((value, key) => {

                        return (
                            <div className={"holderForCourses"}>
                            <Link to={"/course/" + value._id}>
                                <img className={"itemsImgForCourses"} src={value.image} alt={""}/>
                            <a className="dataItemForCourses"  target="_blank">
                                <p>{value.courseName} </p>
                            </a>
                            </Link>
                            </div>
                        );
                    })}
                </div>
                </div>
            )}
        </div>
    );
};

export default SearchBoxForCourses;
