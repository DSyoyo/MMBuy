$(function () {

  setMenu($(".mmB-nav ul"));


  function setMenu(dom, callback) {
    var $lastFour;
    // 获取导航数据
    Route.getindexmenu(function (info) {
      // console.log(info);
      var data = info.result;
      //console.log(data);
      var menuHtml = "";
      data.forEach(function (e, i) {
        menuHtml += '<li> <a href="' + e.titlehref + '">' + e.img + '<p>' + e.name + '</p> </a></li>';

      })
      $(dom).html(menuHtml);

      $lastFour = $(dom).children("li:nth-last-child(-n+4)");
      $lastFour.addClass("hide");
      
      $(dom).find("li:nth-child(8) > a ").on("click",function(){
        $lastFour.toggleClass("hide");
      })
    });

    
  }


  // 获取折扣数据
  Route.getmoneyctrl(function(info) {
    console.log(info);
    $(".discount-items").html(template("tpl",info));
  })

})