import { ICreateStudent } from "@/types/student.types";
import api from ".";

export const getStudent = async () => {
  try {
    const response = await api.get("/students");
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

export const createStudent = async (data: FormData) => {
  try {
    const response = await api.post("/students", data);
    return response.data;
  } catch (error: any) {
    console.log("create student api error:", error);
    throw error;
  }
};
