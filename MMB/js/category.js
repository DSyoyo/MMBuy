// $(function () {

  // 标题数据
  Route.getcategorytitle(function (info) {
    // console.log(info);
    $(".product-list").html(template("tpl", info));

  });

 
  // 列表数据
  $(".product-list").on("click",'.mmB-title a', function () {
    var id = $(this).data("id");


    $(this).parent().next().toggleClass("hide");

   // console.log( $(this).parent().next());
    // 由于function内的this指向不同，需要用that替换this
    var that = $(this)
    Route.getcategory(id, function (info) {
      console.log(info);
       var html = template("tpl2", info);


       that.parent().next().html(html);
      
    })

  })
