import React from 'react';
import './SearchBar.css'; // We'll create this CSS file

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;