let searchBtn = document.querySelector('#search');

searchBtn.onclick = function(event){
    let textInput = document.querySelector('#text-input');
    if (textInput.value) {
        location.href = `search?q=${textInput.value.toLowerCase()}`;
    }
}
    
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let textInput = document.querySelector('#text-input');
        if (textInput.value) {
            event.preventDefault();
            searchBtn.click();
        }
    }
});


let randomSearch = document.querySelector('#randomSearch');
randomSearch.onclick = function (event) {
    getRandom();
}

async function getRandom() {
    try {
        let response = await fetch(`http://localhost:3000/search/random`);
        let url = await response.text();
        window.location.href = url;
    } catch (err) {
        console.log(err);
    }
}

