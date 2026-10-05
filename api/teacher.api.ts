import api from ".";

export const getTeacher = async () => {
  try {
    const response = await api.get("/teachers");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
