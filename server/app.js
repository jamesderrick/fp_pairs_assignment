const express = require('express');
const app = express();
const cors = require('cors');

const searchResults = [
    {
        url: "https://www.bbc.co.uk/sport/football",
        title: "Football - BBC Sport",
        content: "Football news, scores, results, fixtures and videos from the Premier League, Championship, European and World Football from the BBC."
    },
    {
        url: "https://www.bbc.co.uk/sport/football",
        title: "Football - BBC Sport",
        content: "Football news, scores, results, fixtures and videos from the Premier League, Championship, European and World Football from the BBC."
    },
    {
        url: "https://www.bbc.co.uk",
        title: "BBC News",
        content: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and ..."
    }
]

app.use(cors());

app.get('/', (req,res) => {
    res.send(JSON.stringify(searchResults));
})

app.get('/search/:searchTerm', (req, res) => {
    let searchTerm = req.params.searchTerm;
    res.send({searchTerm})
})

app.listen(3000, () => {
    console.log("server up and running on port 3000")
})