const express = require('express')
const app = express()
const port = 8000

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'ZSAvmrbo6kGggGXGTp4KqidVN',
    consumer_secret: '8ivfP2blr5UQJZBcSXujf6KFJRYhrdtD1WkjwLNU325Lpccibi',
    access_token_key: '1397547764825956356-bo7Wv8QtlVz7byc6h4saGlEW1J9q9P',
    access_token_secret: 'IuXVdUaTXVDHzAGwcQX3j1AkJgXfrN4iyr6vYiRzT3xO9'
});

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.get('/tweets', (req, res) => {
    const screen_name = req.query.user
    client.get('statuses/user_timeline', {screen_name}, (error, tweets, response) => {
        if (!error) {
            res.send(tweets)
        } else {
            res.status(500).send({message: error});
        }
    });
})

app.listen(port, () => {
    console.log(` Server started at:${port}`)
})