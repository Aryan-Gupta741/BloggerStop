// const express = require('express');
// const sql = require('mssql');

// const app = express();
// const PORT = 3000; // Replace with your desired port number

// // const dbConfig = {
// //     server: 'PF0XA1KM',
// //     database: 'ReadArticle',
// //     user: 'sa',
// //     password: 'Welcome@15',
// //     options: {
// //       trustServerCertificate: true, // Remove this if not using self-signed SSL certificate
// //     },
// //   };
  
//   app.get('/articles/:id', async (req, res) => {
//     try {
//       const articleId = req.params.id;
//       const pool = await sql.connect(dbConfig);
//       const result = await pool.request().query(`SELECT * FROM ReadArtcile WHERE id = '${articleId}'`);
//       const article = result.recordset[0];
//       res.json(article);
//     } catch (error) {
//       console.error('Error fetching article:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
  


