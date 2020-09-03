import React from 'react';
import './Search-User.styles.scss';

const SearchUser = () => (
    <form className="search__search">
        <input type="search" name="search" id="search" className="search__search--input" 
            placeholder="Search User by name or username"                
        />
        <button type="submit" className="search__search--submit" >Search</button>
    </form>
);

export default SearchUser;