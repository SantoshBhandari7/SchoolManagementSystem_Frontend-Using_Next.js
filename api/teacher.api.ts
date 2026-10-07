import api from ".";

export const getTeacher = async () => {
  try {
    const response = await api.get("/teachers");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};

export const createTeacher = async (data: FormData) => {
  try {
    const response = await api.post("/teachers", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};
