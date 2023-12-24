import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./searchbox.css";
import { useEffect, useState } from "react";
import callPostApiWithStringBody from "../../../utility/api";

interface props {
  name: string;
}

export default function SearchBox({ name }: props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery(name);
  }, [name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const resetSearchQuery = () => setSearchQuery("");

  const search = () => {
    console.log("searching",searchQuery);
  };

  return (
    <div className="searchbox">
      <FontAwesomeIcon icon={faSearch} className="searchicon glass" />

      <input
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={(e) => e.key === "Enter" && search()}
        className="textbox"
        autoCorrect="off"
        spellCheck="false"
        maxLength={2048}
        placeholder="What do you want to search?"
        readOnly
      />

      {/* {searchQuery.length !== 0 && (
        <div
          role="button"
          className="cross"
          style={{ width: "100%", height: "100%" }}
          onClick={resetSearchQuery}
        >
          <FontAwesomeIcon icon={faTimes} className="searchicon" />
        </div>
      )} */}
    </div>
  );
}
