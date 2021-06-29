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
