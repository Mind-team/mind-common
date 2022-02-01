import { IHttpResponseError } from ".";

export const isCorrectResponse = <T>(
  response: T | IHttpResponseError | { isEmptyResponse: true }
): response is T => {
  if ("error" in response || "isEmptyResponse" in response) {
    return false;
  }
  return true;
};
