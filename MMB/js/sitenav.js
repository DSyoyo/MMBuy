$(function(){

  Route.getsitenav(function(info){
    console.log(info);
    $(".mallName").html(template("tpl",info));
  })




}) 