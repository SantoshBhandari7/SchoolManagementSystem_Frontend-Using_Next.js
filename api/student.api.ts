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
