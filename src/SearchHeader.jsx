import { useState } from "react";
import "./SearchHeader.css"

function SearchHeader({searchInput})
{
    const [searchValue, setSearchValue] = useState("");

    const handleOnSubmit = (event) => {
        event.preventDefault();
        searchInput(searchValue);
    };

    const handleOnChange = (event) => {
        setSearchValue(event.target.value);
        // console.log(searchValue);
    }

    return (
    <div className="searchDiv">
        <form onSubmit={handleOnSubmit} className="searchDivForm">
            <label>Search Anything</label>
            <input value={searchValue} onChange={handleOnChange} type="text"></input>
        </form>
    </div>
    )

}
export default SearchHeader;