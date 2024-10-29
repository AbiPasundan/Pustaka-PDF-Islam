
$.getJSON('src/data/data.json', (data) => {
    let datas = data.pdf
    $.each(datas, function (i, data) {
        $("#daftar").append('<div class="card my-5 " "><img src="./src/img/Pustaka PDF ISlam.png" alt="" class="img-fluid"><div class="card-body"><h5 class="card-title my-3">'+ data.title +'</h5><p class="card-text">'+ data.description +'</p></div><ul class="list-group list-group-flush"><li class="list-group-item">Author: <b>'+ data.author +'</b></li><li class="list-group-item">Category: <b>'+ data.category +'</b></li><li class="list-group-item">Publisher: <b>'+ data.publisher +'</b></li></ul><div class="card-body"><a href="'+ data.download +'" target="_blank" class="btn btn-primary m-3">Download</a><a href="'+ data.source +'" target="_blank" class="btn btn-primary m-3">Read Now</a></div></div>')
    })
})  