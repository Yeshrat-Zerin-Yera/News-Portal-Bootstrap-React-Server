const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./data/categories.json');
const allNews = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News Portal API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(allNews);
    }
    else {
        const categoryNews = allNews.filter(news => news.category_id === id);
        res.send(categoryNews);
    }
});

app.get('/news', (req, res) => {
    res.send(allNews);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = allNews.find(news => news._id === id);
    res.send(selectedNews);
});

app.listen(port, () => {
    console.log('News Portal Server Running On Port: ', port);
});