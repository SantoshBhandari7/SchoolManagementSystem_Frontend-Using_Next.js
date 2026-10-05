import { TContact } from "@/types/contact.types";
import api from ".";

export const createContact = async (data: TContact) => {
  try {
    const response = await api.post("/contacts", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error?.response?.data;
  }
};
