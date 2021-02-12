const express = require('express');

const app = express();

const nunjucks = require('nunjucks')

 
app.set('view engine' ,"njk")

nunjucks.configure('src/app/views', {
    express : app
})

app.get('/', (req, res) => res.render('index.html'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));