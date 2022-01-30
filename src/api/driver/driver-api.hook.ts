import { useCache } from "../../cache";
import { IHttpResponseError, useHttp } from "../../http";
import { useEndpoint } from "../endpoint.hook";
import {
  GetDriverResponseDto,
  LoginDriverRequestDto,
  LoginDriverResponseDto,
} from "./dto";

const request = useHttp();
const endpoint = useEndpoint();

const sendConfirmationCode = async (phoneNumber: string, apiVersion = "v4") => {
  return await request<
    Pick<LoginDriverRequestDto, "phoneNumber">,
    Partial<IHttpResponseError>
  >({
    url: endpoint + apiVersion + "/driver/send-confirmation-code",
    method: "POST",
    body: { phoneNumber },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const login = async (data: LoginDriverRequestDto, apiVersion = "v4") => {
  return await request<
    LoginDriverRequestDto,
    LoginDriverResponseDto | Partial<IHttpResponseError>
  >({
    url: endpoint + apiVersion + "/driver/login",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const driver = async (accessToken: string, apiVersion = "v4") => {
  if (!accessToken) {
    throw new Error("You didn't specify access token in driver api hook");
  }
  return await request<
    null,
    GetDriverResponseDto | Partial<IHttpResponseError>
  >({
    url: endpoint + apiVersion + "/driver",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const useDriverApi = (accessToken: string) => {
  const cache = useCache();

  return {
    login,
    sendConfirmationCode,
    driver: (apiVersion = "v4") => driver(accessToken, apiVersion),
  };
};
