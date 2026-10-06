import api from ".";

export const getAllClasses = async () => {
  try {
    const response = await api.get("/classes");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
