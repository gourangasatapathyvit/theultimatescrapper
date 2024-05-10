import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
    const [ipData, setIpData] = useState<Record<string, unknown>>({});
    const loadSavedState = () => {
        axios.get("https://ipinfo.io/json").then((d) => {
            setIpData(d.data);
        });
    };
    
    useEffect(() => {
        loadSavedState();
    }, []);

    return <div>{JSON.stringify(ipData)}</div>;

};

export default Test;
