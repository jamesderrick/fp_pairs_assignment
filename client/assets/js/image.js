getData();

async function getData() {
    try {
        let response = await fetch(`http://localhost:3000/images`);
        let json = await response.json();
        console.log(json);
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

        console.log(image.url);
    })
}