import Torrent from "./torrent/Torrent";
import SearchBox from "./searchBox/SearchBox";
import "./ResPage.css";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";
import callPostApiWithStringBody from "../../utility/api";

interface resPageObjProps {
    testData: mainPageObjProps ;
}
export interface TorrentData {
    name: string;
    magnet: string;
    seeders: number;
    leechers: number;
    size: string;
    uploader: string;
    uploadedAt: string | null;
  }

const ResPage = ({ testData }: resPageObjProps) => {
    const [temp, setTemp] = useState<TorrentData[]>([]);


    useEffect(() => {
        if(testData.inputQuery){
            const apiUrl = 'http://localhost:8090/getAllRes';
            const requestBody = testData.inputQuery;
        
            callPostApiWithStringBody<any>(apiUrl, requestBody)
              .then((response) => {
                console.log('API Response:', response);
                setTemp(response.data)
              })
              .catch((error) => {
                console.error('API Error:', error);
              });
            
        }
      }, []);

    document.title = ""+testData.inputQuery +"_"+ testData.catagory;

    return (
        <div className="main">
            <div className="searchbar">
            {testData.inputQuery !== null && <SearchBox name={testData.inputQuery} />}
            </div>
            {temp.map((res, index) => (
                <Torrent key={index} torrent={res}></Torrent>
            ))}
        </div>
    );

};

export default ResPage;
