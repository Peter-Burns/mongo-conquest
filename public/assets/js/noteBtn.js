// $(function(){
//     $('#noteModal').modal();
// });

$('body').on('click', '.noteBtn', function(){
    $('#noteModal').modal('show');
    $('.noteList').empty();
    $('.postNoteBtn').attr('data-id', $(this).attr("data-id"));
    $.ajax("/headlineNotes/" + $(this).attr("data-id"),{
        type:"GET"
    }).then(function(headline){
        if(headline.notes.length){
            headline.notes.forEach(function(note){
                $('.noteList').append(`<li class="list-group-item">${note.comment}<button class="btn btn-danger deleteNoteBtn ml-2" data-id=${note._id}>X</button></li>`);
            });
        }
        else{
            $('.noteList').append("<li class='list-group-item' id='noNote'> No notes yet</li>");
        }
    });
});