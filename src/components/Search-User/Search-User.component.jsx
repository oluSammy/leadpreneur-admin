import React, { useState } from 'react';
import './Search-User.styles.scss';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


const SearchUser = () => {
    const [searchString, setSearchString] = useState("");
    let history = useHistory();


    const handleSubmit = e => {
        e.preventDefault();
        console.log(searchString);
        if(searchString) history.push(`search-user/${searchString}`);
    }

    return(
        <form onSubmit={handleSubmit} className="search__search">
            <input type="search" name="search" id="search" className="search__search--input"
                placeholder="Search User by name or username" required onChange={e => setSearchString(e.target.value)}
            />
            <button type="submit" className="search__search--submit" >Search</button>
        </form>
    )
};

export default connect() (SearchUser);