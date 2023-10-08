// SearchResults Component
import React from "react";
import Input from "./components/Input";
const SearchResult = ({ data, key, selectedCity }) =>
{
    return <div className="search-result">
        {data.map(d => <div className="search-option" key={d.id} onClick={e => selectedCity(d.id)}>{d.name}</div>)}
    </div>;
};

export default SearchResults;
