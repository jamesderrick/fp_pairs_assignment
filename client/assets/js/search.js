const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');

getData(searchTerm);

async function getData(searchTerm) {
    try {
        let response = await fetch(`http://localhost:3000/search/${searchTerm}`);
        let json = await response.json();
        updateUI(json.results);
    } catch (err) {
        console.log(err);
    }
}

function updateUI(results) {
    let resultsList = document.getElementById('resultsList')
    results.forEach(result => {
        let listItem = document.createElement('li');
        let site = document.createElement('div');
        let title = document.createElement('h3');
        let content = document.createElement('p');
        let link = document.createElement('a');

        link.innerText = result.title;
        link.href = result.url;
        title.append(link);
        content.innerText = result.content;
        site.appendChild(title);
        site.appendChild(content);

        listItem.append(site);
        resultsList.append(listItem);
    });
}