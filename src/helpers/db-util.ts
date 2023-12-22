import { MongoClient } from 'mongodb';
require('dotenv').config();

export async function connectDatabase() {

  const username = process.env.DB_USER;
  
  const client = await MongoClient.connect(
    `mongodb+srv://${username}@cluster0.za1o9.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(client:any, collection:any, document:any) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client:any, collection:any, sort:any , filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}