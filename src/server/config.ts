// process.env

const env = process.env;

export const PORT = env.PORT ?? 3333;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export default {
  PORT,
  HOST,
  SERVER_URL,
};
