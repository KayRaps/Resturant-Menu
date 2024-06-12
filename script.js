document.addEventListener("DOMContentLoaded", () => {
    const pizzaImage = document.getElementById("pizza-image");
    const burgerImage = document.getElementById("burger-image");

    const fetchImage = async (query, element) => {
        const clientId = 'YOUR_UNSPLASH_API_KEY'; // Replace with your Unsplash API key
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data.results.length > 0) {
                element.src = data.results[0].urls.regular;
            } else {
                console.error(`No images found for query: ${query}`);
                element.alt = `No images found for ${query}`;
            }
        } catch (error) {
            console.error('Error fetching image:', error);
            element.alt = `Error fetching image for ${query}`;
        }
    };

    fetchImage("pizza", pizzaImage);
    fetchImage("burger", burgerImage);

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
