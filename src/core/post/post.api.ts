import { Method } from "axios";
import axios from "../axios/axios";
export const POST_BASE_URL = "/posts";

export const callAPI = async ({
  url,
  method,
  data,
}: {
  url: string;
  method: Method;
  data?: any;
}) => {
  return await axios({
    url,
    method,
    data,
  });
};

export const postApi = {
  getPosts: () => {
    return callAPI({ url: POST_BASE_URL, method: "GET" });
  },
};
