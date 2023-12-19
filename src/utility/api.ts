async function callPostApiWithStringBody<T>(
    url: string,
    requestBody: string
): Promise<T> {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
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
