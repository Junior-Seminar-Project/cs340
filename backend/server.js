import signup from "./routes/user_route.js";
import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const PORT = 3000;

// Create instance of the database
//const db = new sqlite3.Database("database/app.db");
const db = new sqlite3.Database(":memory:");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Setup database tables
try {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      email TEXT NOT NULL);`,
  );
} catch (error) {
  console.log(error);
}

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port: " + PORT,
    );
  } else {
    console.log("Error occured, server can't start", error);
  }
});

/**********************************
 **** All Routes defined below ****
 **********************************/
app.post("/signup", signup);
