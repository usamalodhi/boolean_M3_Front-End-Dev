const express = require('express')
const app = express()
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join('src')));
app.use(express.static(path.join('public')));

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/name', function (req, res) {
  req.app.locals.name = req.query.name || req.app.locals.name
  res.render('name', {
    name: req.app.locals.name
  })
})

app.post('/name', function (req, res) {
  const name = req.body.name
  req.app.locals.name = name
  res.redirect('/name')
})

app.get('/api/name', function (req, res) {
  res.json({name: req.app.locals.name})
})

app.post('/api/name', function (req, res) {
  const name = req.body.name
  req.app.locals.name = name
  res.json({name: name})
})

app.listen(3000)
