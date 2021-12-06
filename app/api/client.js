import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.87.175:9000/api",
});

export default apiClient;
