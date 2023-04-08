const { coffeeStock } = require('./state');

const makeCoffe = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log('Kopi berhasil dibuat!');
    } else {
        console.log('Biji kopi habis!');
    };
};

const displayStock = (stock) => {
    for (let item in stock) {
        console.log(item);
    }
}

displayStock(coffeeStock);
makeCoffe('robusta', 80);