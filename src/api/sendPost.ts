
import { HopMailJSResponseStatus } from "../models/HopMailJSResponseStatus";
import { store } from "../store/store";


export const sendPost = async (
  url: string,
  data: string | FormData,
  headers: Record<string, string> = {},
): Promise<HopMailJSResponseStatus> => {
  const response = await fetch(store.origin + url, {
    method: 'POST',
    headers,
    body: data,
  });

  const message = await response.text();
  const responseStatus = new HopMailJSResponseStatus(response.status, message);

  if (response.ok) {    
    return responseStatus;
  }

  throw responseStatus;
};