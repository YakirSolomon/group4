function sendSearch(event) {
    event.preventDefault();
    document.getElementById("div0").style.display = "inline";
    document.getElementById("div2").innerHTML = "";
    var title = document.getElementById("search").value;
    pageNo = 1;
    getRequest(title, pageNo);
}

function getRequest(title, pageNo) {
    var movies = [];
    fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + title + "&type=movie&page=" + pageNo).then(data => data.json()).then(response => {
        respArr = response.Search;
        for (var i = 0; i < respArr.length; i++) {
            var makeMovieInst = new Movie(respArr[i].Title, respArr[i].Year, respArr[i].imdbID, respArr[i].Type, respArr[i].Poster);
            movies.push(makeMovieInst);
        }
        for (var i = 0; i < movies.length; i++) {
            showMovie(movies[i]);
            if (i === movies.length - 1) {
                document.getElementById("div2").innerHTML += "<br><button id='loadBtn' onClick='loadMore()'>Load More</button>";
            }
        }
        fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + title + "&type=movie&page=" + pageNo).then(data => data.json()).then(response => {
            if (response.Search===false) {
                document.getElementById("loadBtn").disabled = true;
            }
        });
    });
}

function loadMore() {
    var div2 = document.getElementById('div2');
    div2.removeChild(div2.lastChild);
    var title = document.getElementById("search").value;
    pageNo++;
    getRequest(title, pageNo);
}

function Movie(title, year, imdbID, type, poster) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
}

function showMovie(movieObj) {
    var div2 = document.getElementById("div2");
    var img = document.createElement("img");
    img.src = movieObj.poster;

    div2.innerHTML += "<br> " + movieObj.title + " - " + "<a href=" + "https://www.imdb.com/title/" + movieObj.imdbID + " target = '_blank'>IMDB</a> <br> ";
    div2.appendChild(img);
}

