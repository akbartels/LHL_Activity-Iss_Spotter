const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('70.71.171.79', (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
    
  console.log('It worked! Returned location:' , data);
});

fetchISSFlyOverTimes({ latitude: '49.21670', longitude: '-122.91670' }, (error, times) => {
  
  if (error) {
    console.log("It didn't work!", error);
  }
  console.log("It worked! Returned times: ", times);
});