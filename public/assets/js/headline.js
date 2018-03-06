$(function(){
    $.ajax("/headlines", {
        type: "GET"
    }).then(function(headlines){
        headlines.forEach(function(headline){
            headline.thumbnail = headline.thumbnail.slice(2);
        $('.newsHeadlines').append(`<div class="headline"><a href="${headline.link}"><img class="img-fluid rounded" src="http://${headline.thumbnail}"/><h3>${headline.title}</h3></a><button class="saveBtn btn btn-success mb-3">Save Link</button></div>`);
        });
    });
});