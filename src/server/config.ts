// process.env

const env = process.env;

export const PORT = env.PORT ?? 3333;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;


export const MONGO_URI = env.MONGO_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL,
};
