$('body').on('click', '.postNoteBtn', function () {
    if ($('#noteText').val().trim()) {
        $.ajax("/note/" + $(this).attr("data-id"), {
            type: 'POST',
            data: {
                comment: $('#noteText').val().trim()
            }
        }).then(function (note) {
            $('#noNote').remove();
            $('.noteList').append(`<li class="list-group-item">${note.comment}<button class="btn btn-danger deleteNoteBtn ml-2" data-id=${note._id}>X</button></li>`);
            $('#noteText').val('');
        });
    }
    else {
        alert('Must leave a note')
    }
});