const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// // Menambahkan 1 data
// const contact1 = new Contact({
//   nama: 'Yoga Listianto',
//   nohp: '089694331588',
//   email: 'yogalistianto7@gmail.com',
// });

// // Simpan ke collection
// contact1.save().then((res) => console.log(res));
