import { useState } from 'react';
import "./style.css";

export default function SearchBox({ onSearch }) {

    const [searchText, setSearchText] = useState("");

    return (
        <div className="search-box mb-3">
            <h2 className="search-box-title">Personal Finder</h2>
            <div className="search-box-inputs">
                <label>
                    <input className="search-box-input form-control" value={searchText}
                        onChange={({ target: { value } }) => setSearchText(value)}
                        onKeyPress={({ key }) => { (key === "Enter") && onSearch(searchText) }} />
                </label>
                <button className="search-box-button btn btn-primary ms-2"
                    onClick={() => onSearch(searchText)}
                >Buscar</button>
            </div>
        </div>
    );
}
