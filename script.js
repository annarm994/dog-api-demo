fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Log the list of dog breeds
        console.log(data);

        const breedsList = document.getElementById('breedsList');
        Object.keys(data.message).forEach(breed => {
            const listItem = document.createElement('li');
            listItem.textContent = breed;
            breedsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });