import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import "./ResPage.css";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";
import callPostApiWithStringBody from "../../utility/api";

interface resPageObjProps {
    formData: mainPageObjProps;
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

const ResPage = ({ formData: initialTestData }: resPageObjProps) => {
    const BASEURL = import.meta.env.VITE_APP_BASE_URL;

    const [testData, setTestData] = useState<mainPageObjProps>(initialTestData);
    const [temp, setTemp] = useState<TorrentData[]>([]);
    const loadSavedState = () => {
        const savedState = localStorage.getItem("mainPageObj");
        if (savedState) {
            const parsedState: mainPageObjProps = JSON.parse(savedState);
            setTestData(parsedState);
        }
    };
    useEffect(() => {
        loadSavedState(); 
      }, []);

    useEffect(() => {
        document.title = "" + testData.inputQuery + "_" + testData.catagory;
        if (testData.inputQuery) {

            callPostApiWithStringBody<TorrentData[]>(BASEURL+"getAllRes", testData)
                .then((response: TorrentData[]) => {
                    console.log("API Response:", response);
                    setTemp(response);
                })
                .catch((error: Error) => {
                    console.error("API Error:", error);
                });
        }
    }, [testData]);

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
