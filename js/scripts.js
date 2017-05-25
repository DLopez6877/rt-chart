////////////////////////////////////////////////////////////
////////////////////   BUSINESS LOGIC   ////////////////////
////////////////////////////////////////////////////////////
var arrayOfMovies = [];

function Movie(title, year, score) {
  this.title = title;
  this.year = year;
  this.score = score;
}

function resetFields() {
    $("input#title").val("");
    $("input#year").val("");
    $("input#score").val("");
}

////////////////////////////////////////////////////////////
////////////////////   USER INTERFACE   ////////////////////
////////////////////////////////////////////////////////////


$(document).ready(function() {
  $(".form1").submit(function(event) { debugger;
    event.preventDefault();

    var inputTitle = $("input#title").val();
    var inputYear = $("input#year").val();
    var inputScore = parseInt($("input#score").val());

    var movieInput = new Movie(inputTitle, inputYear, inputScore);
    arrayOfMovies.push(movieInput);

    var sortedMovieList = arrayOfMovies.slice(0);
    sortedMovieList.sort(function(a,b) {
        return b.score - a.score;
    });

    console.log(sortedMovieList);
    console.log(sortedMovieList[0]);
    $("#results").empty();

    for (i = 0; i < sortedMovieList.length; i++) {
      $("#results").append( '<tr>' +
        '<th>' + sortedMovieList[i].title + '</th>' +
        '<td>' + sortedMovieList[i].year + '</td>' +
        '<td>' + sortedMovieList[i].score + '</td>' +
        '</tr>'
      );
    }

    resetFields();
  });
});
