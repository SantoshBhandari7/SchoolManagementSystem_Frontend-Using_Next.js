import { IProgram } from "@/types/program.types";
import api from ".";

export const getAllProgram = async () => {
  try {
    const response = await api.get("/programs");
    console.log("program response", response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

// export const getProgramById = async () => {
//   try {
//   } catch (error) {}
// };
