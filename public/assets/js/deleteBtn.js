$('body').on('click','.deleteBtn', function(){
    console.log(1);
    $.ajax("/deleteSaved", {
        type: "DELETE",
        data:{
            _id:$(this).attr('data-id')
        }
    }).then(function(){
        alert('Deleted from saved!');
        location.reload();
    });
});