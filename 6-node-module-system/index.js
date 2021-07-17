// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Yoga Listianto'));

// const fs = require('fs'); //core module
// const cetakNama = require('./latihan'); //Local Module
// const moment = require('moment'); // third party module / npm module / node_modules

// const cetakNama = require('./latihan');
const latihan = require('./latihan');

console.log(
    latihan.cetakNama('Yoga Ganteng'),
    latihan.PI,
    latihan.mahasiswa.cetakMhs(),
    new latihan.Orang()
);
