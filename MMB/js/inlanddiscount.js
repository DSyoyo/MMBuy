$(function(){

  Route.getinlanddiscount(function(info) {
    console.log(info);
    var html = template("tpl",info);
    $(".pro-intro").html(html);
  })
})