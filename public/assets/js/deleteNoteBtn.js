$('body').on('click', '.deleteNoteBtn', function () {
    $.ajax("/note/" + $(this).attr("data-id"), {
        type: 'DELETE',
        data: {
            headlineId: $('.postNoteBtn').attr("data-id")
        }
    }).then(function (res) {
        alert(res);
    });
    $(this).parent().remove();
});