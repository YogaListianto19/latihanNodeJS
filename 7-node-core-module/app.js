const { rejects } = require('assert/strict');
const fs = require('fs');
const { resolve } = require('path/posix');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Buat file
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// buat file json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (isi) => {
      resolve(isi);
    });
  });
};

const main = async () => {
  const nama = await tulisPertanyaan('Masukan nama anda : ');
  const email = await tulisPertanyaan('Masukan email anda : ');
  const noHp = await tulisPertanyaan('Masukan No Hp anda : ');

  const contact = { nama, email, noHp };
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4));
  console.log('Data saved');
  rl.close();
};

main();

// rl.question('Masukan nama anda : ', (nama) => {
//   rl.question('Masukan nomer telfon : ', (noHp) => {
//     const contact = { nama, noHp };
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     // var jContact = JSON.stringify(contacts);
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4));
//     // const data = fs.readFileSync('data/contacts.json', 'utf-8');
//     console.log('Data saved');
//     rl.close();
//   });
// });
