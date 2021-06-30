const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');

const textInput = document.querySelector('#search');
textInput.value = searchTerm;

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
    let resultsList = document.getElementById('results');
    let count = results.length;

    let resultsCount = document.getElementById('results-count');
    resultsCount.innerHTML = `<i>Number of search results: ${count}</i>`;

    results.forEach(result => {
        let listItem = document.createElement('div');
        let site = document.createElement('div');
        let link = document.createElement('a');
        let content = document.createElement('p');
        let icon = document.createElement('i');

        let spacer = document.createElement('br');

        listItem.className = 'search_result';
        site.className = 'text_with_arrow_down';
        icon.classList.add('fas');
        icon.classList.add('fa-angle-down');

        link.innerText = result.title;
        link.href = result.url;
        link.target = "_blank"
        
        site.innerText = result.url;
        content.innerText = result.content;
        site.appendChild(spacer);
        site.appendChild(icon);

        listItem.append(site);
        listItem.append(link);
        listItem.append(content);

        resultsList.append(listItem);
    });
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let textInput = document.querySelector('#search');
        if (textInput.value) {
            location.href = `search?q=${textInput.value.toLowerCase()}`;
        }
    }
});