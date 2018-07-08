var shopid = 0;
var areaid = 0;

getgsproduct($(".pro-detail"), { shopid: 0, areaid: 0 });

function getgsproduct(dom, data, callback) {
  var shopid = data.shopid || 0;
  var areaid = data.areaid || 0;
  Route.getgsproduct(shopid, areaid, function (info) {
    dom.html(template("tpl3", info));
  })
}

// 获取店名
Route.getgsshop(function (info) {
  // console.log(info);
  $(".choice-list1").html(template("tpl1", info));

  $(".mallname").on("click", function (info) {
    $(".choice-list1").toggleClass("now");
  })

  $(".choice-list1 a").on("click", function () {
    shopid = $(this).data("id");
    $(".mallname span").text($(this).text());

    getgsproduct($(".pro-detail"), { shopid: shopid, areaid: areaid });
    $(".choice-list1").toggleClass("now");

  })
})


// 获取地域
Route.getgsshoparea(function (info) {
  // console.log(info);
  $(".choice-list2").html(template("tpl2", info));

  $(".area").on("click", function (info) {
    $(".choice-list2").toggleClass("now");
  })

  $(".choice-list2 a").on("click", function () {
    areaid = $(this).data("id");
    // console.log(areaid);
    var txt = $(this).text().slice(0,2)
    $(".area span").text(txt);

    getgsproduct($(".pro-detail"), { shopid: shopid, areaid: areaid });
    $(".choice-list2").toggleClass("now");
  })

})


// 点击全部
$(".total").on("click", function () {
  $(".total-price").toggleClass("now");
})

$(".total-price a").on("click", function () {
  $(".total span").text($(this).text());
})









// var shopid =0;
// var areaid =0;


// // 获取店名
// Route.getgsshop(function (info) {
//   // console.log(info);
//   $(".choice-list1").html(template("tpl1", info));

//   $(".mallname").on("click", function (info) {
//     $(".choice-list1").toggleClass("now");
//   })

//   $(".choice-list1 a").on("click",function(){
//     shopid = $(this).data("id");
//     $(".mallname span").text($(this).text());

//     Route.getgsproduct(shopid, areaid, function (info) {
//       $(".pro-detail").html(template("tpl3",info));
//     })

//   })
// })


// // 获取地域
// Route.getgsshoparea(function (info) {
//   // console.log(info);
//   $(".choice-list2").html(template("tpl2", info));

//   $(".area").on("click", function (info) {
//     $(".choice-list2").toggleClass("now");
//   })

//   $(".choice-list2 a").on("click",function(){
//     areaid = $(this).data("id");
//     // console.log(areaid);
//     $(".area span").text($(this).text());
//     Route.getgsproduct(shopid, areaid, function (info) {
//       //console.log(info);
//       $(".pro-detail").html(template("tpl3",info));
//     })

//   })

// })
// // console.log(areaid);
// // 点击全部
// $(".total").on("click", function () {
//   $(".total-price").toggleClass("now");
// })

// $(".total-price a").on("click", function () {
//   $(".total span").text($(this).text());
// })


// Route.getgsproduct(shopid, areaid, function (info) {
//   console.log(info);
//   $(".pro-detail").html(template("tpl3",info));
// })











