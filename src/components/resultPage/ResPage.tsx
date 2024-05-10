import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import { TorrentData, mainPageObjProps } from "../../utility/AllProps";
import { useContext, useEffect, useState } from "react";
import callPostApiWithStringBody from "../../utility/api";
import LoadIngSpinner from "../styleUtility/LoadIngSpinner";
import DataNotFound from "../styleUtility/DataNotFound";
import { MyGlobalContext } from "../../App";
import "./ResPage.css";

const ResPage = () => {
    const BASEURL = import.meta.env.VITE_APP_BASE_URL;
    const defaultMainPageObjProps: mainPageObjProps = {
        inputQuery: '', 
        catagory: '', 
       source:[]
    };

    const formData = useContext(MyGlobalContext);
    const [testData, setTestData] = useState<mainPageObjProps>(formData?.mainPageObjProps || defaultMainPageObjProps);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [temp, setTemp] = useState<TorrentData[]>([]);

    const loadSavedState = () => {
        const savedState = localStorage.getItem("mainPageObj");

        if (savedState) {
            const parsedState: mainPageObjProps = JSON.parse(savedState);
            setTestData(parsedState);
        }
    };
    
    useEffect(() => {
        if(formData?.mainPageObjProps.source?.length!=0 && formData?.mainPageObjProps.inputQuery){
            setTestData(formData.mainPageObjProps);
        }
        loadSavedState();
    }, [formData?.mainPageObjProps]);

    useEffect(() => {
            document.title = "" + testData.inputQuery;

            if (testData.inputQuery) {
                callPostApiWithStringBody<TorrentData[]>(BASEURL + "getAllRes",testData)
                    .then((response: TorrentData[]) => {
                        setTemp(response);
                        setIsLoading(false);
                    })
                    .catch((error: any) => {
                        setIsLoading(false);
                        console.log(error);
                    });
            }
    }, [BASEURL, testData,formData?.mainPageObjProps]);

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
