const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login request recieved: ");
  console.log("Username: ", username);
  console.log("Password: ", password);

  res.status(200).json({ message: "Login recieved" });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port: " + PORT,
    );
  } else {
    console.log("Error occured, server can't start", error);
  }
});
