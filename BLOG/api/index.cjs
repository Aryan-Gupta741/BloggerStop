
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mssql = require('mssql');
const bcrypt = require('bcrypt'); // For password hashing
const authRoutes = require('./routes/authRoutes.cjs');
const userRoutes = require('./routes/userRoutes.cjs');
const router = require('./controllers/authController.cjs')



const app = express();
const PORT = 5000; // Replace with your desired port number

// Middleware
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}

));
app.use(bodyParser.json());

// Database configuration
const dbConfig = {
  server: 'PF0XA1KM',
  PORT: 1435,
  database: 'Login',
  user: 'sa',
  password: 'Welcome@15',
  options: {
    trustServerCertificate: true, // Remove this if not using self-signed SSL certificate
  },
  
};

// Connect to the database
// mssql.connect(dbConfig, (err) => {
//   if (err) {
//     console.log('Database connection error:', err);
//   } else {
//     console.log('Connected to the database.');
//   }
// });

// Route to handle user login
app.use('/api/auth', router);

// Route to handle user signup
// app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
