import { ICreateSubject } from "@/types/subject.types";
import api from ".";

export const getAllSubjects = async () => {
  try {
    const response = await api.get("/subjects");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const createSubject = async (data: ICreateSubject) => {
  try {
    const response = await api.post("subjects", data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
