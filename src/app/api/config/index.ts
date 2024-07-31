import { consts } from "../misc/consts";

export const port: string | undefined = process.env.PORT;
export const environment: string | undefined = process.env.NODE_ENV || consts.development;

export const mongodbString: string | undefined = process.env.MONGODB_URI;

export const privateSecret: string | undefined = process.env.JWT_PRIVATE_SECRET;