$(function () {

  // 获取标题列表
  Route.getbaicaijiatitle(function (info) {
    // console.log(info);
    $(".title-list").html(template("tpl", info));

    var $ul = $(".coupon-title ul");
    var $links = $(".coupon-title ul a");
    var total = 0;
    $links.each(function(i,e){
      var $width = $(this).width();
      total += $width + 24;
  
    })
    //console.log(total);
    $ul.width = total;
    new IScroll(".coupon-title", {
        scrollY: false,
        scrollX: true
    })

  })

  setProductList($(".coupon-content"));

  $(".coupon-title").on("click", "a", function () {
    $(".coupon-title li a").removeClass("now");
    $(this).addClass("now");
    var titleid = $(this).data("id");
    //console.log(titleid);
    setProductList($(".coupon-content"), titleid);
  })


  // 根据标题id获取该标题对应的商品列表然后渲染到页面
  function setProductList(dom, titleid, callback) {
    titleid = titleid || 0;
    Route.getbaicaijiaproduct(titleid, function (info) {
      //console.log(info);
      var html = template('tpl2', info);
      dom.html(html);
    })
  }




})