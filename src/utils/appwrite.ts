import { Client, Databases } from 'appwrite'

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66d880f9002e0cf462da')

export const databases = new Databases(client)