const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');

const textInput = document.querySelector('#search');
textInput.value = searchTerm;

const allLink = document.getElementById('all-link');
allLink.href = 'search?q=' + searchTerm

const imageLink = document.getElementById('image-link');
imageLink.href = queryString;

getData();

async function getData() {
    try {
        let response = await fetch(`http://localhost:3000/images`);
        let json = await response.json();
        updateUI(json);
    } catch (err) {
        console.log(err);
    }
}

function updateUI(results) {

    let section = document.getElementById('image-section');

    results.forEach(image => {

        let container = document.createElement('div');
        container.classList.add('col');

        let newImage = document.createElement('img');
        newImage.src = image.url;

        container.append(newImage);
        section.append(container);

    })
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let textInput = document.querySelector('#search');
        if (textInput.value) {
            location.href = `images?q=${textInput.value.toLowerCase()}`;
        }
    }
});