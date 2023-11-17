import React from "react";

const Searchbar = ({ onSearch }) => {
    const [id, setId] = React.useState("");

    const handleChange = (event) => {
        setId(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} type="search"></input>
            <button onClick={() => onSearch(id)}>Buscar</button>
        </div>
    )
}

export default Searchbar;