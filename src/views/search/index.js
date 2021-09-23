import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import data from "../../data/data.json";
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [ results, setResults ] = useState([]);

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (data?.length) {
            const regE = new RegExp(searchText,"i");
            const filteredData = data.filter((user) => {
                return (regE.test(Object.values(user).join('')));
            });
            setResults(filteredData);
        }
    }

    return (
        <div className={`p-4 container search ${isAtTop ? "search--top" : "search--middle"}`}>
            <SearchBox onSearch={handleSearchClick} />
            <SearchResults results={results} />
        </div>
    );
}