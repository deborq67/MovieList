// Initialize an empty array

let movieList = [];
let sortedAscending = true;

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
    //Saves the array data to the browser.
    localStorage.setItem('movies', JSON.stringify(movieList));
}

function deleteMovie(index) {
    movieList.splice(index, 1);
    renderMovieList();
}

function sortMovies() {
    // Switch between ascending and descending orders.
    if (sortedAscending) {
    movieList.sort((a,b) => a.localeCompare(b));
    } else {
    movieList.sort((a,b) => b.localeCompare(a));
    }
    // Changes it to the opposite boolean to ensure switching.
    sortedAscending = !sortedAscending;
    renderMovieList();
}

//Retrieves data from browser memory.

if(localStorage.getItem('movies') == null){
    movieList =[];
}else{
    movieList = JSON.parse(localStorage.getItem('movies'));
    renderMovieList();
}



