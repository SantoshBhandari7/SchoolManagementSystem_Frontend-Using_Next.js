import { ICreateProgram } from "@/types/program.types";
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

export const createProgram = async (data: ICreateProgram) => {
  try {
    const response = await api.post("/programs", data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
