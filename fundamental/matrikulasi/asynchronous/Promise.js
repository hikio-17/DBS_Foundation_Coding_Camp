const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('rejected')), 1500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));


// Promise.all() akan langsung mengembalikan nilai rejected jika salah satu promise mengembalikan reject tanpa mengembalikan nilai promise yang statusnya fullfilled;
Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message));



// Promise.race()   mengembalikan promise yang prosesnya lebih cepat meskipun nilainya fullfilled ataupun rejected
Promise.race([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));


// Promise.allSettled() akan mengembalikan seluruh nilai dari hasil masing masing promise baik nilai promise fullfilled maupun rejected
Promise.allSettled([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));


// Promise.any() akan mengembalikan nilai tercepat yang berstatus fullfilled, jika seluruh promise berstatus rejected, akan mengembalikan "All Promises were rejected"
Promise.any([promise1, promise2, promise3])
    .then((values) => console.log(values));