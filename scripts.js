window.onload = function(){
    quotes();
    //tutorials();


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


/*
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
*/