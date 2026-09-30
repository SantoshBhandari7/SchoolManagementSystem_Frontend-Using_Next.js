import { LoginSchema, SignUpSchema } from "@/schema/auth.schema";
import * as yup from "yup";

export type TLogin = yup.InferType<typeof LoginSchema>;

export type TSignUp = yup.InferType<typeof SignUpSchema>;
