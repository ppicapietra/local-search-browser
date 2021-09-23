import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);
    const [ usersData, setUsersData ] = useState([]);

    const handleSearchClick = (searchText) => {
        if (searchText) {
            setIsAtTop(true);
            if (usersData?.length) {
                const regE = new RegExp(searchText, "i");
                const filteredData = usersData.filter((user) => {
                    return (regE.test(Object.values(user).join('')));
                });
                setResults(filteredData);
            }
        }
    }

    useEffect(() => {
        const getUsersData = async () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data =>
                setUsersData(data));
        };
        getUsersData().catch(null);
    }, [])

    return (
        <div className={`p-4 container search ${isAtTop ? "search--top" : "search--middle"}`}>
            <SearchBox onSearch={handleSearchClick} />
            <SearchResults results={results} isShowingResults={isAtTop} />
        </div>
    );
}