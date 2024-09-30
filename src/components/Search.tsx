import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import { GetRequest } from "../services/API";

interface SearchBarProps {
  onSetSynonyms: (synonyms: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSetSynonyms }) => {
  const [suggestions, setSuggestions] = useState<
    { id: string; name: string }[]
  >([]);

  const styling = {
    height: "40px",
    border: "1px solid #dfe1e5",
    borderRadius: "4px",
    backgroundColor: "white",
    boxShadow: "none",
    hoverBackgroundColor: "#f2f2f2",
    color: "#212121",
    fontSize: "14px",
    fontFamily: "Helvetica, sans-serif",
  };

  const fetchAllWords = async () => {
    const response = await GetRequest(`synonym/all/word`);
    if (response.status === 200) {
      const data = await response.json();
      setSuggestions(data.map((word: string) => ({ id: word, name: word })));
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const fetchInitialWords = async () => {
      await fetchAllWords();
    };
    fetchInitialWords();
  }, []);

  const handleOnSearch = () => {
    onSetSynonyms([]);
  };

  const handleOnSelect = async (item: { id: string; name: string }) => {
    const response = await GetRequest(`synonym/${item.name}`);
    const data = await response.json();
    if (response.status === 200) {
      onSetSynonyms(data);
    } else {
      onSetSynonyms([]);
    }
  };

  return (
    <div>
      <ReactSearchAutocomplete
        items={suggestions}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        styling={styling}
        className="col-md-5 offset-md-4"
        placeholder="Search for a word"
      />
    </div>
  );
};

export default SearchBar;
