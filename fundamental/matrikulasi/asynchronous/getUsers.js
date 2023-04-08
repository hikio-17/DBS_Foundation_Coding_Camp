const { promisify } = require('util');

// use callback
let getUsers = (isOffline, callback) => {
   // simulate network delay
   setTimeout(() => {
      let users = ['Hikio', 'Dicoding', 'DBS'];

      if (isOffline) {
         callback(new Error('cannot retrieve users due offline'), null);
         return;
      }

      callback(null, users)
   }, 5000);
}

// function userCallback(error, users) {
//    if (error) {
//       console.log('Process failed:', error.message);
//       return;
//    }

//    console.log('process success:', users)
// }




/** Use Promise */ //Refactor to promise
// function getUsers(isOffline) {
//    return new Promise((reject, resolve) => {
//       setTimeout(() => {
//          const users = ['Hikio', 'John', 'Doe'];

//          if (isOffline) {
//             reject(new Error('cannot retrieve users due offline'));
//          }

//          resolve(users);
//       }, 3000)
//    });
// };

// getUsers(false)
//    .then((data) => console.log(data))
//    .catch((err) => console.log(err));



/** Use Promisify core module nodejs */
// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
   .then((user) => console.log(user))
   .catch((error) => console.log(error));

getUsersPromise(true)
   .then((user) => console.log(user))
   .catch((error) => console.log(error));