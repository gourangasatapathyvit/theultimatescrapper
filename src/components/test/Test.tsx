import DataNotFound from "../styleUtility/DataNotFound";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const Test = () => {
    const [ipData, setIpData] = useState<Record<string, unknown>>({});

    const [, setTestData] = useState<mainPageObjProps>();
    const loadSavedState = () => {
        const savedState = localStorage.getItem("mainPageObj");
        console.log("savedState test = " + savedState);

        if (savedState) {
            const parsedState: mainPageObjProps = JSON.parse(savedState);
            setTestData(parsedState);
        }

        axios.get("https://ipinfo.io/json").then((d) => {
            setIpData(d.data);
        });
    };

    useEffect(() => {
        console.log("useEffect test");
        loadSavedState();
    }, []);

    return <div>{JSON.stringify(ipData)}</div>;

};

export default Test;
