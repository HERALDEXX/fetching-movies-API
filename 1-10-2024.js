const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search-input');
const seachButton = document.getElementById('search-button')
const apiKey = '8ce2e1ed'; // Replace with your OMDb API key
const generalSearchTerm = 'Thor'; // General search term
// Function to fetch movie data from OMDb API
const fetchMovies = async (searchTerm) => {
 try {
 const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}
`);
 const data = await response.json();
 movieContainer.innerHTML = ''; // Clear previous results
 if (data.Response === "True") {
 data.Search.forEach(movie => {
 const movieDiv = document.createElement('div');
 movieDiv.classList.add('movie');
 movieDiv.innerHTML = `
 <a href="https://www.youtube.com/results?search_query=${movie.Title} full movie" target="_blank">
 <img src="${movie.Poster}" alt="${movie.Title}">
 <h2>${movie.Title}</h2>
 <p>Year: ${movie.Year}</p>
`;
 movieContainer.appendChild(movieDiv);
 });
} else {
 movieContainer.innerHTML = `<p>No movies found for "${searchTerm}"</p>`;
 }
} catch (error) {
console.error('Error fetching movie data:', error);
movieContainer.innerHTML = `<p>There was an error fetching the movie data.</p>`;
 }
};
seachButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim() || generalSearchTerm;
    fetchMovies(searchTerm);
});
fetchMovies(generalSearchTerm); // Call the function to load movies on page load