import { useState, useEffect, useContext } from "react";
import ContactsContext from "../../context/contacts";
import SearchBox from "./components/SearchBox";
import "./style.css";
import SearchResults from "./components/SearchResults";

export default function Search() {
    const [ isAtTop , setIsAtTop ] = useState(false);
    const [ results , setResults ] = useState([]);

    const { getContactsList, contactsList } = useContext(ContactsContext);

    const handleSearchClick = (searchText) => {
        if (searchText) {
            setIsAtTop(true);
            if (contactsList?.length) {
                console.log(contactsList);
                const regE = new RegExp(searchText, "i");
                const filteredData = contactsList.filter((user) => {
                    return (regE.test(Object.values(user).join('')));
                });
                setResults(filteredData);
            }
        }
    }

    useEffect(() => {
        getContactsList().catch(null);
    }, []);

    return (
        <div className={`p-4 container search ${isAtTop ? "search--top" : "search--middle"}`}>
            <SearchBox onSearch={handleSearchClick} />
            <SearchResults results={results} isShowingResults={isAtTop} />
        </div>
    );
}