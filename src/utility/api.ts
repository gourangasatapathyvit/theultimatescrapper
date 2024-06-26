import { mainPageObjProps } from "../../src/utility/AllProps";
import axios, { AxiosResponse } from "axios";

export default async function callPostApiWithStringBody<T>(
  url: string,
  requestBody: mainPageObjProps
): Promise<T> {
  if (!requestBody) {
    throw new Error("Request body is required.");
  }

  try {
    const response: AxiosResponse<T> = await axios.post<T>(url, requestBody,{
      headers: {
        'Content-Security-Policy': 'upgrade-insecure-requests'
    }
    });

    if (response.status !== 200) {
      throw new Error("Network response was not ok.");
    }

    return response.data;
  } catch (error:any) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios Error: ${error}`);
    } else {
      throw new Error(`General Error: ${error.message}`);
    }
  }
}
