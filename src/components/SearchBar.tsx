import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

// interface Props {
//   onSetSearchTerm: (term: string) => void;
// }

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // onSetSearchTerm(term); we don't need this because we have navigate
    navigate(`/gifs/search?${new URLSearchParams({ term: term })}`);
  };

  //can do just { term }

  return (
    <form
      className="SearchBar"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor="searchTerm">Search Term</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
