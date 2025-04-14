import { useQuery, useQueryClient } from "@tanstack/react-query";
import useStore from "../store/store";
import { getAllEmployees } from "../api/employees";

export const getEmployees = () => {
  return useQuery({
    queryKey: ["getEmployee"],
    queryFn: async () => {
      console.log("came to query");
      const response = await getAllEmployees();
      return response;
    },
  });
};
