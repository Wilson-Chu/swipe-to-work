const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const { getUserByEmail } = require("../database/userHelpers");
const bcrypt = require("bcrypt");
const session = require("express-session");

// generate a random string using crypto for secret key
const generateRandomString = () => {
  return crypto.randomBytes(32).toString("hex");
};

const routes = function () {
  // Use express-session middleware
  router.use(
    session({
      secret: generateRandomString(),
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Set secure to true in a production environment with HTTPS
    })
  );

  // router.get("/", (req, res) => {
  //   getUserByEmail("alice@example.com").then((data) => res.json(data));
  // });

  router.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
      // pull all the info from users table based on the email
      const user = await getUserByEmail(email);

      // check if the user exists and the password is correct
      if (
        user.length > 0 &&
        // (await bcrypt.compare(password, user[0].password))
        password === user[0].password
      ) {
        // exist & match -> set user info in the session
        req.session.userId = user[0].id;
        // console.log(req.session.userId);

        // send userId to frontend in header
        res.setHeader("x-user-auth", req.session.userId);
        // console.log("x-user-auth header set:", req.session.userId);

        return res.status(200).json({ success: true });
      } else {
        // Authentication failed
        return res
          .status(401)
          .json({ success: true, message: "Invalid password or email address" });
      }
    } catch (error) {
      console.error("Database error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  });

  return router;
};

module.exports = routes;
