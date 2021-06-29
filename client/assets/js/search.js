const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');

getData(searchTerm);

async function getData(searchTerm) {
    try {
        let response = await fetch(`http://localhost:3000/search/${searchTerm}`);
        let json = await response.json();
        updateUI([json]);
    } catch (err) {
        console.log(err);
    }
}

function updateUI(results) {
    let resultsList = document.getElementById('resultsList')
    results.forEach(result => {
        console.log(result);
        let listItem = document.createElement('li');
        listItem.innerText = result.searchTerm;
        resultsList.append(listItem);
    });
}