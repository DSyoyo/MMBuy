$(function () {

  var brandtitleid = getSearch().brandtitleid;
  var pagesize = 4;

  // 品牌排名
  Route.getbrand(brandtitleid, function (info) {
    console.log(info);
    $(".rank").html(template("tpl", info));

    $(".rank li:first-child span").addClass("first");
    $(".rank li:nth-child(2) span").addClass("second");
    $(".rank li:nth-child(3) span").addClass("third");
  })

  // 商品列表
  Route.getbrandproductlist(brandtitleid, pagesize, function (info) {
   // console.log(info);
    $(".tv-rank").html(template("tpl2", info));
  })

  var productid = 1;

  Route.getproductcom(productid, function (info) {
    //console.log(info);
    $(".brand-com").html(template("tpl3",info));
  })


})