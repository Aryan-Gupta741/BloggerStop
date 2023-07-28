// authController.js
const express = require("express")
const router = express.Router()
const mssql = require('mssql');
const bcrypt = require('bcrypt');
const dbConfig = require('../dbconfig.js');


router.post("/add", async (req,res) => {

  let pool = await mssql.connect(dbConfig);
  let reqs = pool.request();
  let ar = "INSERT INTO  signup (user_type,full_name,email,password) VALUES ('admin','aryan','aryangupta.ag641@gmail.com','qwerty')";

  await reqs.query(ar);

  // return result.status(200).json("User has been created");
})

// const loginUser = async (req, res) => {
//   try {
//     const { username, password, userType } = req.body;

//     // Check if all required fields are provided
//     if (!username || !password || !userType) {
//       return res.status(400).json({ error: 'Please provide username, password, and userType.' });
//     }

//     // Perform a query to check if the user exists in the database
//     const queryResult = await mssql.query(`SELECT * FROM dbo.signup WHERE username = ${username} AND userType = ${userType}`);

//     if (queryResult.rowsAffected[0] === 0) {
//       // User does not exist or incorrect userType
//       return res.status(401).json({ error: 'Invalid credentials or userType.' });
//     }

//     // User exists, compare the hashed password
//     const user = queryResult.recordset[0];
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       // Incorrect password
//       return res.status(401).json({ error: 'Invalid credentials or userType.' });
//     }

//     // Authentication successful, send success response
//     return res.status(200).json({ message: 'Authentication successful.', user });
//   } catch (err) {
//     console.log('Error during login:', err);
//     return res.status(500).json({ error: 'Internal server error.' });
//   }
// };

module.exports = router;


// module.exports = {
//   loginUser,
//   // Other authentication functions can be added here (e.g., registerUser, logoutUser, etc.)
// };
