// function
function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}

// Variabel
const PI = 3.14;

// Objek
const mahasiswa = {
    nama: 'Indra Ramadhan',
    umur: 26,
    cetakMhs() {
        return `Hallo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

// Class
class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    };
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

// Mode ES6
module.exports = { cetakNama, PI, mahasiswa, Orang };