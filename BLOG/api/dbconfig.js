// const dbConfig = {
//     server: 'PF0XA1KM',
//     database: 'Login',
//     user: 'sa',
//     password: 'Welcome@15',
//     options: {
//       trustServerCertificate: true, // Remove this if not using self-signed SSL certificate
//       trustedconnection : true,
//       instancename : "SQLEXPRESS",
//       encrypt : false
//     },
//     PORT: 60588,
//   };

const dbConfig = {
    user: 'sa',
    password: 'Welcome@15',
    server: 'PF0XA1KM',
    database: 'Login',
    options: {
    //   trustServerCertificate: true, // Remove this if not using self-signed SSL certificate
      trustedconnection : true,
      enableArithAbort: true,
      instancename : "",
      encrypt: false
    },
    port : 60588,
  };

  module.exports = dbConfig;