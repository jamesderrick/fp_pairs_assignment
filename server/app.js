const express = require('express');
const app = express();
const cors = require('cors');

const searchResults = [
    {
        url: "https://www.bbc.co.uk/sport/football",
        title: "Football - BBC Sport",
        content: "Football news, scores, results, fixtures and videos from the Premier League, Championship, European and World Football from the BBC.",
        keywords: "sport,football"
    },
    {
        url: "https://www.bbc.co.uk/sport",
        title: "BBC Sport",
        content: "Breaking news & live sports coverage including results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the ...",
        keywords: "sport"
    },
    {
        url: "https://www.bbc.co.uk",
        title: "BBC News",
        content: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and ...",
        keywords: "news,british,uk"
    },
    {
        url: "https://www.uefa.com",
        title: "UEFA 2020 | UEFA.com",
        content: "The UEFA European Championship brings Europe's top national teams together; get video, stories and official stats.",
        keywords: "football,europe"
    },
    {
        url: "https://abcnews.go.com",
        title: "ABC News – Breaking News, Latest News, Headlines & Videos",
        content: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
        keywords: "news,world,international"
    },
    {
        url: "https://edition.cnn.com",
        title: "CNN International - Breaking News, US News, World News ...",
        content: "Find the latest breaking news and information on the top stories, weather, business, entertainment, politics, and more. For in-depth coverage, CNN provides ...",
        keywords: "news,world,international"
    },
    {
        url: "https://www.itv.com",
        title: "ITV Hub - The Home of ITV",
        content: "ITV Hub - the new home of ITV Player, ITV on demand and live TV. It's all of ITV in one place so you can sneak peek upcoming Premieres, watch Box Sets, series ...",
        keywords: "news,tv,sport"
    },
    {
        url: "https://www.battersea.org.uk",
        title: "Battersea Dogs & Cats Home",
        content: "Battersea Is Here For Every Dog And Cat, And Has Been Since 1860. We Believe That Every Dog And Cat Deserves The Best.",
        keywords: "dog,cat,adopt,pet"
    },
]

const imageResults = [
    {
        url: "assets/img/images/test.jpeg",
        name: "Test 1"
    },
    {
        url: "assets/img/images/test.jpeg",
        name: "Test 2"
    },
    {
        url: "assets/img/images/test.jpeg",
        name: "Test 3"
    }
]

app.use(cors());

app.get('/', (req,res) => {
    res.send(JSON.stringify(searchResults));
})

app.get('/search/random', (req,res) => {
    let url = getRandomUrl()
    res.send(url);
})

app.get('/search/:searchTerm', (req, res) => {
    let searchTerm = req.params.searchTerm;

    const results = searchResults.filter(site => {
        if (site.title.toLowerCase().includes(searchTerm) || site.keywords.includes(searchTerm)) {
            return site
        }
    })    
    res.send({results})
})

app.get('/images', (req, res) => {
    res.send(JSON.stringify(imageResults));
})

app.listen(3000, () => {
    console.log("server up and running on port 3000")
})

function getRandomUrl () {
    let random = Math.floor(Math.random() * (searchResults.length));
    return searchResults[random].url
}