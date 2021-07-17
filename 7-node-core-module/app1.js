// Core Module
// File System
const fs = require('fs');

// Menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!!');
// } catch (e) {
//     console.log(e);
// };

// menuliskan string ke file secara asynchronous
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (err) => {
//     console.log(err);
// });

// Membaca isi file synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file Asynchronous
// fs.readFile('data/test.txt', 'utf-8', (e,data) => {
//     if (e) throw e;
//     console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan nama anda : ', (nama) => {
  rl.question('Masukan nomer telfon : ', (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    // var jContact = JSON.stringify(contacts);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4));
    // const data = fs.readFileSync('data/contacts.json', 'utf-8');
    console.log('Data saved');
    rl.close();
  });
});
