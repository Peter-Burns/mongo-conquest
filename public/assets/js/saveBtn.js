$('body').on('click','.saveBtn', function(){
    console.log(1);
    $.ajax("/saveHeadline", {
        type: "POST",
        data:{
            _id:$(this).attr('data-id')
        }
    }).then(function(){
        alert('Saved!');
        location.reload();
    });
});