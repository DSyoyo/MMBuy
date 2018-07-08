
 

  var couponid = getSearch().couponid;

  Route.getcouponproduct(couponid, function (info) {
    console.log(info);
    $(".coupon-details").html(template("tpl", info));

    $(".imgs").html(template("pics", info));

    
    $(".coupon-details a").on("click",function(){
      //alert("hehe");
      $(".mask").css("display","block");
    })


    // var $imgs = $(".imgs img");
    // var $pics = $(".pics");

    // var count = 0;
  
    // $(".next").on("click",function(){
    //   alert("hhe");
    //   // count++;
    //   // if (count >= $imgs.length-1) {
    //   //   count = 0;
    //   //   $(".coupon-details .imgs").css("left","-count*$pics.width");
    //   // }
    //   // $(".coupon-details .imgs").css("left","-count*$pics.width");

    // })


   



  //   var imgs = document.querySelectorAll(".imgs .img");
  //   var ul = document.querySelector(".imgs");
  //   var next = document.querySelector(".clickpic .next");
  //   var prev = document.querySelector(".clickpic .prev");
  //   var pics = document.querySelector(".pics");


  //   var count = 0;

  //   next.addEventListener("click", function () {
  //     alert("呵呵")
  //     if (count >= imgs.length - 1) {
  //       count = 0;
  //       ul.style.left = 0;
  //     } else {
  //       count++;
  //       ul.style.left = -count * pics.offsetWidth + "px";
  //     }
      
  //   })

  //  prev.addEventListener("click", function () {
  //    count--;
  //    if (count <= 0) {
  //      count = imgs.length - 1;
  //      ul.style.left = -count * pics.offsetWidth + "px";
  //    }
  //    ul.style.left = -count * pics.offsetWidth + "px";
  //  })


  })







