import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import "./ResPage.css";
import { mainPageObjProps } from "../mainPage/MainPage";

interface resPageObjProps {
    testData: mainPageObjProps ;
}
const ResPage = ({ testData }: resPageObjProps) => {
    

    let temp = [
        {
            magnet: "magnet:?xt=urn:btih:123",
            size: "123gb",
            seeders: "1234",
            leechers: "4321",
            uploaded_at: "1337X",
            uploader: "QXR",
            name: testData.inputQuery,
            category:testData.catagory
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
