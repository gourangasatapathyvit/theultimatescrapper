import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";
import callPostApiWithStringBody from "../../utility/api";
import "./ResPage.css";
import LoadIngSpinner from "../styleUtility/LoadIngSpinner";
import DataNotFound from "../styleUtility/DataNotFound";

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

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [testData, setTestData] = useState<mainPageObjProps>(initialTestData);
    const [temp, setTemp] = useState<TorrentData[]>([]);
    const [isFirstEffectComplete, setIsFirstEffectComplete] =
        useState<boolean>(false);

    const loadSavedState = () => {
        const savedState = localStorage.getItem("mainPageObj");
        console.log("savedState = " + savedState);

        if (savedState) {
            const parsedState: mainPageObjProps = JSON.parse(savedState);
            setTestData(parsedState);
        }
    };

    useEffect(() => {
        loadSavedState();
        setIsFirstEffectComplete(true);
    }, []);

    useEffect(() => {
        if (isFirstEffectComplete) {
            document.title = "" + testData.inputQuery + "_" + testData.catagory;
            console.log(testData);

            if (testData.inputQuery) {
                callPostApiWithStringBody<TorrentData[]>(
                    BASEURL + "getAllRes",
                    testData
                )
                    .then((response: TorrentData[]) => {
                        setTemp(response);
                        setIsLoading(false);
                    })
                    .catch((error: any) => {
                        setIsLoading(false);
                        console.log(error);
                    });
            }
        }
    }, [BASEURL, testData, isFirstEffectComplete]);

    return (
        <div className="main">
            <div className="searchbar">
                {testData.inputQuery !== null && (
                    <SearchBox name={testData.inputQuery} />
                )}
            </div>
            {!isLoading && temp && temp.length > 0 ? (
                temp.map((res, index) => (
                    <Torrent key={index} torrent={res}></Torrent>
                ))
            ) : isLoading ? (
                <LoadIngSpinner />
            ) : (
                <DataNotFound />
            )}
        </div>
    );
};

export default ResPage;
