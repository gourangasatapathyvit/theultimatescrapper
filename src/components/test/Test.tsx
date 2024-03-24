import DataNotFound from "../styleUtility/DataNotFound";
import { mainPageObjProps } from "../mainPage/MainPage";
import { useEffect, useState } from "react";

const Test = () => {

    const [, setTestData] = useState<mainPageObjProps>();
    const loadSavedState = () => {
        const savedState = localStorage.getItem("mainPageObj");
        console.log("savedState test = " + savedState);

        if (savedState) {
            const parsedState: mainPageObjProps = JSON.parse(savedState);
            setTestData(parsedState);
        }
    };

    useEffect(() => {
        console.log("useEffect test");
        loadSavedState();
    }, []);

    return (
        <div>
            <DataNotFound />
        </div>
    );
};

export default Test;
