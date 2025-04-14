import axios from "axios";
import { makeRequest } from "../utils/makeRequest";

export const getAllEmployees = async () => {
  console.log("came tio make request");
  return await makeRequest(`/api/employees`);
};
