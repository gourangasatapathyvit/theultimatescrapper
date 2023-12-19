import { mainPageObjProps } from "../components/mainPage/MainPage"

async function callPostApiWithStringBody<T>(
    url: string,
    requestBody: mainPageObjProps
): Promise<T> {
    try {
        if(requestBody==null || requestBody==undefined){
            throw new Error("input must be there.");

        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }

        const data: T = await response.json();
        return data;
    } catch (error:any) {
        throw new Error(`Error: ${error.message}`);
    }
}

export default callPostApiWithStringBody;
