$(function(){

  Route.getbrandtitle(function(info){
   $(".brand-list").html(template("tpl",info));
  })


})