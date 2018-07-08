$(function(){

  var productid = getSearch().productid;
  Route.getproduct(productid,function(info) {
    //console.log(info);
    $(".compare").html(template("tpl",info));
  })

  Route.getproductcom(productid,function(info){
   // console.log(info);
    $(".com-list").html(template("tpl2",info));
  })

})