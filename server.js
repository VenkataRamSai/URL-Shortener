const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const app = express()



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

connectDb();
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index.ejs', { shortUrls: shortUrls })

});
app.post('/shortUrls', async (req, res) => {

    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/');

});
app.get('/:shortUrl', async (req, res) => {
    try {
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
        if (!shortUrl) {
            return res.sendStatus(404);
        }

        shortUrl.clicks++;
        await shortUrl.save();

        res.redirect(shortUrl.full);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});