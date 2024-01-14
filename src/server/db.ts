//npx tsnd src/dev/load-test-data.ts - instala os test do db
// npm i mongodb - instala o mongo


import { MongoClient } from "mongodb";

import {MONGO_URI, DATABASE_NAME} from "./config";

let connectedClient;

export const connectClient = async () => {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("Connected db");

  connectedClient = client;

  return connectedClient.db(DATABASE_NAME);
  }

export const stopClient = async () => {
  await connectedClient.close();
  }


