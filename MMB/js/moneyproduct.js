$(function () {

  var productid = getSearch().productid;
  //console.log(productid);

  Route.getmoneyctrlproduct(productid,function(info){
    console.log(info);
    $(".container").html(template("tpl",info));
  })

  
})