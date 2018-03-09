$(function(){
    $.ajax("/headlines", {
        type: "GET"
    }).then(function(headlines){
        headlines.forEach(function(headline){
            headline.thumbnail = headline.thumbnail.slice(2);
        $('.newsHeadlines').append(`<div class="headline"><a href="${headline.link}"><img class="img-fluid rounded" src="http://${headline.thumbnail}"/><h3>${headline.title}</h3></a><button class="btn ${headline.saved ? "btn-danger deleteBtn" : "btn-success saveBtn"} mb-3" data-id=${headline._id}>${headline.saved ? "Delete Saved" : "Save Link"}</button><button class="btn btn-primary noteBtn ml-2 mb-3" data-id=${headline._id}>View Notes</button></div>`);
        });
    });
});