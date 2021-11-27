import React, {useEffect, useState} from 'react';
import "./searchBoxForBlog.css"
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

const SearchBoxForBlog = (props) => {

    const [searchData, setSearchData] = useState([]);

    const getBlog = () => {
        axios.get('https://academy-reaction.herokuapp.com/api/news')
            .then((response) => {
                console.log(response.data.result);
                const myBlog = response.data.result;
                setSearchData(myBlog);
            });
    }


    useEffect(() => getBlog(), []);


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = searchData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
                <div className={"controllerForBlog"}>
                <div className="dataResultForBlog">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <div className={"holderForBlog"}>
                            <Link to={"/blog/maghale/" + value._id}>
                                <img className={"itemsImgForBlog"} src={value.image} alt={""}/>
                                <a className="dataItemForBlog" target="_blank">
                                    <p>{value.title} </p>
                                </a>

                            </Link>
                    </div>

                        )
                        ;
                    })}
                </div>
                </div>
            )}
        </div>
    );
};

export default SearchBoxForBlog;
