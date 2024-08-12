import jwt from "jsonwebtoken";
import { privateSecret } from "../config";

const secret = privateSecret || "";

export const createClientSecret = async (payload: object, expiresIn: any) => {
  const options = {
    expiresIn: expiresIn || "100y"
  };

  const token = jwt.sign(payload, secret, options);
  return token;
}

export const createToken = async (data: object, time: number) => {
  const expiration = time * 60 * 60 * 24;
  const payload = {
    data,
    exp: Math.floor(Date.now() / 1000) + expiration
  };
  const token = jwt.sign(payload, secret);
  return token;
}

export const decodeToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return error;
  }
}