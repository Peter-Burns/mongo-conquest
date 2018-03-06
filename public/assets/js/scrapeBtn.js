$('.scrapeBtn').on('click', function(e){
    e.preventDefault();
    $.ajax("/scrape", {
        type: "GET"
    }).then(function(scraped){
        alert(scraped);
        location.reload();
    });
});