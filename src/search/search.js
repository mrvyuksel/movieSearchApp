import React from "react";

const SearchComponent = (props) => {
  const { handleOnChange } = props;
	
  return (
    <div className="search-bar">
      <h3>Search Movies...</h3>
      <input onChange={handleOnChange} placeholder="Search for any movies..."/>
    </div>
  );
};

export default SearchComponent;
