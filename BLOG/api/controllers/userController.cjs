// controllers/userController.cjs

const mssql = require('mssql');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { fullName, email, password, userType } = req.body;

    // Validate user input
    if (!fullName || !email || !password || !userType) {
      return res.status(400).json({ error: 'Please provide all required details.' });
    }

    // Check if user type is valid
    if (userType === 'admin') {
      return res.status(400).json({ error: 'Cannot create an admin user.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Perform a query to check if the email already exists in the database
    const existingUser = await mssql.query`SELECT * FROM dbo.login WHERE email = ${email}`;

    if (existingUser.rowsAffected[0] > 0) {
      return res.status(409).json({ error: 'User with this email already exists.' });
    }

    // Insert the new user into the database
    await mssql.query`INSERT INTO dbo.login (fullName, email, password, userType) VALUES (${fullName}, ${email}, ${hashedPassword}, ${userType})`;

    return res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.log('Error during user creation:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = {
  signup,
};
