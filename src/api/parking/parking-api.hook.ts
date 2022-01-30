import { useHttp } from "../../http";
import { useEndpoint } from "../endpoint.hook";
import { GetLastParkingProcessDto } from "./dto";

const request = useHttp();
const endpoint = useEndpoint();

const lastParkingProcess = async (
  accessToken: string,
  appVersion: string = "v4"
) => {
  if (!accessToken) {
    throw new Error("You didn't specify access token in parking api hook");
  }
  return await request<null, GetLastParkingProcessDto>({
    url: endpoint + appVersion + "/parking/pp/last",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const useParkingApi = (accessToken: string) => {
  return {
    lastParkingProcess: (appVersion = "v4") =>
      lastParkingProcess(accessToken, appVersion),
  };
};
