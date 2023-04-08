// create function get user
function getUser(id, callback) {
   setTimeout(() => {
      if (!id) {
         callback(new Error('User ID is required'), null);
      };

      callback(null, {id, name: 'Hikio', location: 'Jakarta'});
   }, 2000);
};

// create function get weather
function getWeather(location, callback) {
   setTimeout(() => {
      if (!location) {
         callback(new Error('Location is required'), null);
      };

      callback(null, { weather: 'Sunny', temperature: 30 });
   }, 2000);
};


// use callback
function getUserWeather(userId, callback) {
   getUser(userId, (error, user) => {
      if (error) {
         callback(error, null);
      }
      getWeather(user.location, (error, weather) => {
         if (error) {
            callback(error, null);
         }

         callback(null, {...user, ...weather});
      });
   });
};

getUserWeather(1, (error, userWeather) => {
   if (error) {
      console.log(error);
   }

   console.log(userWeather);
});


// use promise
// function getUserWeather(userId) {
//    let user;

//    return getUser(userId)
//       .then((_user) => {
//       user = _user;
//       return getWeather(user.location)
//       })
//       .then((weather) => ({ ...user, ...weather}));
// }

// getUserWeather(1)
// .then(console.log)
// .catch(console.log);

