import api from ".";

export const getAllSubjects = async () => {
  try {
    const response = await api.get("/subjects");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
