
$.getJSON('src/data/data.json', (data) => {
    let datas = data.pdf
    $.each(datas, function (i, data) {
        $("#daftar").append('<div class="card mx-3 my-5" onload="loading()"><img src="" alt=""><div class="card-body"><h5 class="card-title my-3">'+ data.title +'</h5><p class="card-text">'+ data.description +'</p></div><ul class="list-group list-group-flush"><li class="list-group-item">Author: <b>'+ data.author +'</b></li><li class="list-group-item">Category: <b>'+ data.category +'</b></li><li class="list-group-item">Publisher: <b>'+ data.publisher +'</b></li></ul><div class="card-body"><a href="'+ data.download +'" target="_blank" class="btn btn-primary ">Download</a><a href="'+ data.source +'" target="_blank" class="btn btn-primary mx-3">Read Now</a></div></div>')
    })
})  