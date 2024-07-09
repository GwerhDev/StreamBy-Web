export const port: string | undefined = process.env.PORT;
export const environment: string | undefined = process.env.NODE_ENV;
export const apiUrl: string | undefined = process.env.NODE_ENV === "production"
  ? process.env.API_PRODUCTION
  : process.env.API_DEVELOPMENT;

export const mongodbString: string | undefined = process.env.MONGODB_STRING;

export const privateSecret: string | undefined = process.env.PRIVATE_SECRET;