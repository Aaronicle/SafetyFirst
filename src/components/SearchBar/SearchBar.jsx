import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search materials..."
      />
    </div>
  );
}

export default SearchBar;
