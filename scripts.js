window.onload = function(){
    quotes();
    tutorials();
    vids();


    


}

function quotes(){
    
    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/quotes`,
        dataType: 'json',
        beforeSend:  function(){
            $(".loader").show()
        },
        complete: function(){
            $(".loader").hide()
        },
        success: function(result){
            let active= "active";
            for(let i = 0; i < result.length; i++){
                if (i != 0){
                    active -= "active"
                }
                console.log("test =" + result[i].name)
                $("#car-inner-1").append(`
                        <div class="carousel-item ${active}">
                            <div class="container">
                                <div class="d-flex  flex-column flex-md-row  align-items-center text-white">
                                    <img class="quote-pic rounded-circle" src=${result[i].pic_url} alt="avatar" width="200px">
                                    <div class=" ml-md-5 mr-md-0 flex-column">
                                        <p style="font-size: 22px;">« ${result[i].text}</p>
                                        <p class="pt-2 mb-0" style="font-size: 22px;"><b>${result[i].name}</b></p>
                                        <p><i style="font-size: 18px;">${result[i].title}</i></p>
                                    </div>
                                </div>
                              </div>
                            </div> `
                            )
                
            }

           
        }
    });
}



function tutorials(){
    

    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/popular-tutorials`,
        dataType: 'json',
        beforeSend:  function(){
            $(".loader").show()
        },
        complete: function(){
            $(".loader").hide()
        },
        success: function(result){
            let active= "active";
            let stars = "";
            let no_stars = ""
            console.log("tite is" + result[0])
            for(let i = 0; i < result.length; i++){
                stars="";
                no_stars="";
                if (i != 0){
                    active -= "active"
                }
                for (j = 0; j < result[i].star; j++){
                    console.log("star" + j)
                    stars += `<img class="mr-2" src="images/star_on.png" width="18px">`
                }
                for (j = 0; j < 5 - result[i].star; j++){
                    console.log("star" + j)
                    no_stars += `<img class="mr-2" src="images/star_off.png" width="18px">`
                }
                console.log(result[i].star)
                console.log("stars" + stars)
                $("#car-inner-2").append(`
                <div class="carousel-item ${active}">

                            <div class="col-12 col-sm-6 col-lg-3 vid-item">
                                <div class="card bg-white border-0">

                                    <img class="card-img-top " src=${result[i].thumb_url}>
                                    <img class="card-img-top play-btn" src="images/play.png" width="10px">

                                    <div class="card-body">
                                        <h4 class="card-title">${result[i].title}</h4>
                                        <p class="card-text text-muted">${result[i].title} </p>
                                    </div>
                                    <div class="pl-3 d-flex  flex-md-row  align-items-center ">
                                        <img class="rounded-circle" src=${result[i].author_pic_url} width="40px">
                                        <p class="text-royal pl-3 pt-2"><b>${result[i].author}</b></p>
                                    </div>
                                    <div class="pl-3 pb-2 d-flex  flex-md-row  align-items-center ">
                                    ${stars} ${no_stars}
                                        
                                        <p class="pt-3 ml-5 text-royal"><b>${result[i].duration}</b></p>
                                    </div>
                                </div>
                            </div>

                </div>

                `
                )

            }
            $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
                var next = $(this).next();
                if (!next.length) {
                  next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
              
                for (var i=0;i<3;i++) {
                  next=next.next();
                  if (!next.length) {
                    next=$(this).siblings(':first');
                  }
                  next.children(':first-child').clone().appendTo($(this));
                }
              });
        }
        
    });
    

}

function vids(){
    

    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/latest-videos`,
        dataType: 'json',
        beforeSend:  function(){
            $(".loader").show()
        },
        complete: function(){
            $(".loader").hide()
        },
        success: function(result){
            let active= "active";
            let stars = "";
            let no_stars = ""
            console.log("tite is" + result[0])
            for(let i = 0; i < result.length; i++){
                stars="";
                no_stars="";
                if (i != 0){
                    active -= "active"
                }
                for (j = 0; j < result[i].star; j++){
                    console.log("star" + j)
                    stars += `<img class="mr-2" src="images/star_on.png" width="18px">`
                }
                for (j = 0; j < 5 - result[i].star; j++){
                    console.log("star" + j)
                    no_stars += `<img class="mr-2" src="images/star_off.png" width="18px">`
                }
                console.log(result[i].star)
                console.log("stars" + stars)
                $("#car-inner-3").append(`
                <div class="carousel-item ${active}">

                            <div class="col-12 col-sm-6 col-lg-3 vid-item">
                                <div class="card bg-white border-0">

                                    <img class="card-img-top " src=${result[i].thumb_url}>
                                    <img class="card-img-top play-btn" src="images/play.png" width="10px">

                                    <div class="card-body">
                                        <h4 class="card-title">${result[i].title}</h4>
                                        <p class="card-text text-muted">${result[i].title} </p>
                                    </div>
                                    <div class="pl-3 d-flex  flex-md-row  align-items-center ">
                                        <img class="rounded-circle" src=${result[i].author_pic_url} width="40px">
                                        <p class="text-royal pl-3 pt-2"><b>${result[i].author}</b></p>
                                    </div>
                                    <div class="pl-3 pb-2 d-flex  flex-md-row  align-items-center ">
                                    ${stars} ${no_stars}
                                        
                                        <p class="pt-3 ml-5 text-royal"><b>${result[i].duration}</b></p>
                                    </div>
                                </div>
                            </div>

                </div>

                `
                )

            }
            $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
                var next = $(this).next();
                if (!next.length) {
                  next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
              
                for (var i=0;i<3;i++) {
                  next=next.next();
                  if (!next.length) {
                    next=$(this).siblings(':first');
                  }
                  next.children(':first-child').clone().appendTo($(this));
                }
              });
        }
        
    });
    

}

