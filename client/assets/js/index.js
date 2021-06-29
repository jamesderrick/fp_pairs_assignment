let searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', (event) => {
    let textInput = document.querySelector('#text-input');
    let link = document.querySelector('button a');
    link.href = `search?q=${textInput.value}`;
})