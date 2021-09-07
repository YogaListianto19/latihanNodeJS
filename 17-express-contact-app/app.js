const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');
const app = express();
const port = 1234;

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

//built in middle ware
app.use(express.static('public'));

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'YogaGanteng',
      email: 'yogaganteng@gmail.com',
    },
    {
      nama: 'Agam',
      email: 'agam@gmail.com',
    },
    {
      nama: 'ajay',
      email: 'ajay@gmail.com',
    },
  ];
  res.render('index', {
    nama: 'YogaGanteng',
    title: 'Halaman Home dude',
    mahasiswa,
    layout: 'layouts/main-layout',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Halaman About',
    layout: 'layouts/main-layout',
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', {
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact,
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
