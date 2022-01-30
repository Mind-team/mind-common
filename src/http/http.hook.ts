import { IHttpRequest } from "./http-request.interface";
import { IHttpResponseError } from "./http-response-error.interface";

export const useHttp = () => {
  return async <Req, Res>(
    configObject: IHttpRequest<Req>
  ): Promise<Res | IHttpResponseError | {}> => {
    if (!configObject || !configObject.url || !configObject.method) {
      throw new Error(
        "You didn't specify a required parameter for the request"
      );
    }
    if (configObject.method !== "GET" && "body" in configObject) {
      try {
        const response = await fetch(configObject.url, {
          method: configObject.method,
          body: JSON.stringify(configObject.body),
          headers: "headers" in configObject ? configObject.headers : {},
        });
        return await response.json();
      } catch (e) {
        return {};
      }
    }
    try {
      const response = await fetch(configObject.url, {
        method: "GET",
        headers: "headers" in configObject ? configObject.headers : {},
      });
      return await response.json();
    } catch (e) {
      return {};
    }
  };
};
