document.addEventListener('DOMContentLoaded', () => {
    const fetchCatButton = document.getElementById('fetch-cat-btn');
    const catImageContainer = document.getElementById('cat-image-container');
    
    const fetchCatImage = () => {
        const url = 'https://api.thecatapi.com/v1/images/search';
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from the Cat API. Status code: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const catImageUrl = data[0].url;
                displayCatImage(catImageUrl);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const displayCatImage = (imageUrl) => {
        catImageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Cat Image">`;
    };

    fetchCatButton.addEventListener('click', fetchCatImage);
});
