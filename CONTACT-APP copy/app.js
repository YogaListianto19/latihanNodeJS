const { tulisPertanyaan, simpanContact } = require('./contacts');

const main = async () => {
  const nama = await tulisPertanyaan('Masukan nama anda : ');
  const email = await tulisPertanyaan('Masukan email anda : ');
  const noHp = await tulisPertanyaan('Masukan No Hp anda : ');

  simpanContact(nama, email, noHp);
};

main();
