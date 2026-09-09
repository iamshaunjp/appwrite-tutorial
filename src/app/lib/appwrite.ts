// lib/appwrite.ts

import { Client, Account, TablesDB } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export { ID } from "appwrite";
