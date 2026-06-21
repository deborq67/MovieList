// Initialize an empty array

let movieList = [];

function addMovie() {
    const movieInput = document.getElementById("movie-name");
    const movie = movieInput.value.trim();

    if(movie !== "") {
        movieList.push(movie);
        renderMovieList();
        movieInput.value="";
    }
}

function renderMovieList() {
    let movieDisplay = document.getElementById("movie-list");
    movieDisplay.innerHTML = "";
    for (let i=0; i < movieList.length; i++){
        movieDisplay.innerHTML +=
        '<li class = "collection-item">' +
        movieList[i] + 
        '<button class="remove-btn btn waves-effect waves-light" onClick="deleteMovie(' +
        i +
        ')">Remove Movie</button></li>';   
    }
}

function deleteMovie(index) {
    movieList.splice(index, 1);
    renderMovieList();
}