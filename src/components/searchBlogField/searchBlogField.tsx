import "./searchBlogField.css";
import searchIcon from "../../images/search-mini.svg";
import filterIcon from "../../images/filter-md.svg";

export default function SearchBlogField() {
  return (
    <div className="hero-search">
      <span className="search-icon">
        <img src={searchIcon} alt="hero-img" height="24px" width="24px" />
      </span>

      <input
        type="search"
        className="form-control hero-search-field"
        placeholder="Search blog..."
        name="search"
      />

      <span className="filter-icon">
        <img src={filterIcon} alt="hero-img" height="56px" width="56px" />
      </span>
    </div>
  );
}
