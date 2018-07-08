$(function(){
  
  var productid = getSearch().productid;
  Route.getdiscountproduct(productid,function(info){
    console.log(info);
    var html = template("tpl",info);
    $(".detail").html(html);
  })
})