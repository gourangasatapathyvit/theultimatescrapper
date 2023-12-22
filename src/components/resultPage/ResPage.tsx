import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import "./ResPage.css";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";
import callPostApiWithStringBody from "../../utility/api";

interface resPageObjProps {
    testData: mainPageObjProps;
}
export interface TorrentData {
    name: string;
    magnetLink: string;
    seed: number;
    leech: number;
    size: string;
    uploader: string;
    date: string;
    downLoadLink: string | null;
    image: string | null;
}

const ResPage = ({ testData }: resPageObjProps) => {
    const [temp, setTemp] = useState<TorrentData[]>([]);

    useEffect(() => {
        if (testData.inputQuery) {
            const apiUrl = "http://localhost:8090/getAllRes";

            callPostApiWithStringBody<any>(apiUrl, testData)
                .then((response) => {
                    console.log("API Response:", response);
                    setTemp(response);
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        }
    }, []);

    document.title = "" + testData.inputQuery + "_" + testData.catagory;

    return (
        <div className="main">
            <div className="searchbar">
                {testData.inputQuery !== null && (
                    <SearchBox name={testData.inputQuery} />
                )}
            </div>
            {temp && temp.length > 0 ? (
                temp.map((res, index) => (
                    <Torrent key={index} torrent={res}></Torrent>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default ResPage;
