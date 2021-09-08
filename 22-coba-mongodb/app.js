const { MongoClient, ObjectId } = require('mongodb');
var ObjectID = require('mongodb').ObjectId;

const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'wpu';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log('Koneksi gagal!');
  }

  // pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne(
  // {
  //     nama: 'kaleng',
  //     email: 'kaleng@gmail.com'
  // },
  //     (err, result) => {
  //         if (err) {
  //         return console.log('gagal menambahkan data!')
  //         }
  //         console.log(result)
  // }
  // )

  // menambahkan lebih dari 1 data
  //   db.collection('mahasiswa').insertMany(
  //     [
  //       {
  //         nama: 'ateng',
  //         email: 'ateng@gmail.com',
  //       },
  //       {
  //         nama: 'indra',
  //         email: 'indra@gmail.com',
  //       },
  //     ],
  //     (err, result) => {
  //       if (err) {
  //         return console.log('gagal menambahkan data!');
  //       }
  //       console.log(result);
  //     }
  //   );

  //   // Menampilkan semua data di collection 'mahasiswa'
  //   db.collection('mahasiswa')
  //     .find()
  //     .toArray((err, result) => {
  //       console.log(result);
  //     });

  // Menampilkan data berdasarkan kriteria di collection 'mahasiswa'
  //   db.collection('mahasiswa')
  //     .find({ _id: ObjectID('61381de964fd12c01f00c06a') })
  //     .toArray((err, result) => {
  //       console.log(result);
  //     });

  // mengubah data berdasarkan ID
  //   const updatePromise = db.collection('mahasiswa').updateOne(
  //     {
  //       _id: ObjectID('61381de964fd12c01f00c06a'),
  //     },
  //     {
  //       $set: {
  //         email: 'yogaganteng@gmail.com',
  //       },
  //     }
  //   );
  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // menghapus 1 data
  //   db.collection('mahasiswa')
  //     .deleteOne({
  //       _id: ObjectID('613820e6873073b44e07bf49'),
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // Menghapus lebih dari 1 data
  db.collection('mahasiswa')
    .deleteMany({
      _id: ObjectID('61381eab64fd12c01f00c06c'),
      _id: ObjectID('61382df0babdb667ea66d332'),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
