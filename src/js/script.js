function showAllCategory(){
    $.getJSON('src/data/data.json', (data) => {
        let datas = data.pdf
        $.each(datas, function (i, data) {
            $("#daftar").append('<div class="card my-5 " "><img src="./src/img/Pustaka PDF ISlam.png" alt="" class="img-fluid"><div class="card-body"><h5 class="card-title my-3">' + data.title + '</h5><p class="card-text">' + data.description + '</p></div><ul class="list-group list-group-flush"><li class="list-group-item">Author: <b>' + data.author + '</b></li><li class="list-group-item">Category: <b>' + data.category + '</b></li><li class="list-group-item">Publisher: <b>' + data.publisher + '</b></li></ul><div class="card-body"><a href="' + data.download + '" target="_blank" class="btn btn-primary m-3">Download</a><a href="' + data.source + '" target="_blank" class="btn btn-primary m-3">Read Now</a></div></div>')
        })
    })
}

showAllCategory()

$('.link-offset-2').on('click', function() {
    $('.link-offset-2').removeClass('text-white')
    $(this).addClass('text-white')

    let kategori = $(this).html()
    $('.title-list').html(kategori)

    if(kategori == 'All Category'){
        $('#daftar').html(showAllCategory())
        return;
    }

    $.getJSON('src/data/data.json', function (data) {
        let datas = data.pdf
        let content = ''
        $.each(datas, (i, data) => {
            if(data.category == kategori.toLowerCase()){
                content += '<div class="card my-5 " "><img src="./src/img/Pustaka PDF ISlam.png" alt="" class="img-fluid"><div class="card-body"><h5 class="card-title my-3">'+ data.title +'</h5><p class="card-text">'+ data.description +'</p></div><ul class="list-group list-group-flush"><li class="list-group-item">Author: <b>'+ data.author +'</b></li><li class="list-group-item">Category: <b>'+ data.category +'</b></li><li class="list-group-item">Publisher: <b>'+ data.publisher +'</b></li></ul><div class="card-body"><a href="'+ data.download +'" target="_blank" class="btn btn-primary m-3">Download</a><a href="'+ data.source +'" target="_blank" class="btn btn-primary m-3">Read Now</a></div></div>'
            }
        })

        $('#daftar').html(content)
    })
})