/***********************************/
/*        Make Header Here         */
/*                                 */
/*      Written By: Paul Blair     */
/***********************************/

import User from "../objects/user_obj.js";
import create_user from "../service/user_service.js";

// User signup route
export default function signup(req, res) {
  const db = req.db; //get db from middleware

  // Verify the data from the post request
  let missing_info = [];
  if (!req.body.username) {
    missing_info.push("username");
  }
  if (!req.body.password) {
    missing_info.push("password");
  }
  if (!req.body.first_name) {
    missing_info.push("first_name");
  }
  if (!req.body.last_name) {
    missing_info.push("last_name");
  }
  if (!req.body.email) {
    missing_info.push("email");
  }

  // If data is misisng send back an error message
  if (missing_info.length > 0) {
    res
      .status(400)
      .json({ message: "Missing information", missing_info: missing_info });
  }

  const { username, password, first_name, last_name, email } = req.body;
  const user = new User(username, password, first_name, last_name, email, null);

  if (!create_user(db, user)) {
    res.status(400).json({ message: "Failed to create user!" });
  }
  res.status(201).json(user);
}

//login route
/*
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login request recieved: ");
  console.log("Username: ", username);
  console.log("Password: ", password);

  res.status(200).json({ message: "Login recieved" });
});

*/
