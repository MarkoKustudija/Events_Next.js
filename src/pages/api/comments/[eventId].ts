import { useEffect } from "react";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

// Example using Express.js
import express from "express";
const app = express();
app.use(express.json());


////////////////////////////////////


async function handler(req: any, res: any) {

  const eventId = req.query.eventId;

  let client;


  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  // POST
  if (req.method === "POST") {

    const { email, name, text } = req.body;

    // if (
    //   !email.includes("@") ||
    //   !name ||
    //   name.trim() === "" ||
    //   !text ||
    //   text.trim() === ""
    // ) {
    //   res.status(422).json({ message: "Invalid input." });
    //   client.close();
    //   return;
    // }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment.eventId = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  // GET

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { eventId : -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  // client.close();
}

export default handler;
