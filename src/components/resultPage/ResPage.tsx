import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import "./ResPage.css";
import { useLocation } from "react-router-dom";

interface resPageObjProps {
  source: string;
}
const ResPage = ({ source }: resPageObjProps) => {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("input");

  let temp = [
    {
      magnet: "magnet:?xt=urn:btih:123",
      size: "123gb",
      seeders: "1234",
      leechers: "4321",
      uploaded_at: "1337X",
      uploader: "QXR",
      name: "sample data",
    },
  ];

  document.title = "temp.name" + " - lorem Search";

  return (
    <div className="main">
      <div className="searchbar">
        <SearchBox name={"lorem"} />
      </div>
      {temp.map((res, index) => (
        <Torrent key={index} torrent={res}></Torrent>
      ))}
    </div>
  );

  // return <Torrent torrent={temp}></Torrent>;
};

export default ResPage;
