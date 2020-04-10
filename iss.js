const request = require("request");


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};




module.exports = {fetchMyIP};

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('My IP', ip)
//   }
// });

// //index.js
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ipBody) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ipBody);
// });