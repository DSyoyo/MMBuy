$(function () {


  var categoryid = getSearch().categoryid;
  var pageid = getSearch().pageid;
  var category = getSearch().category;
  // console.log(categoryid,pageid);
  // 面包屑导航渲染
  Route.getcategorybyid(categoryid,function(info) {
   // console.log(info);
    $(".bread").html(template("bread",info));
  })



  // 列表渲染
  Route.getproductlist(categoryid, pageid, function (info) {
    console.log(info);

    $(".discount-items").html(template("tpl", info));
    info.page = Math.ceil(info.totalCount / info.pagesize);

    // select框渲染
    $("#selectPage").html(template("tpl2", info));
  })


  var pageid = 1;
  var maxPage;
  // 点击下一页
  $(".next").on("click", function () {
    pageid++;
    if (pageid > maxPage) {
      pageid = maxPage;
      return;
    }
    $("#selectPage").val(pageid);
    Route.getproductlist(categoryid, pageid, function (info) {
      //console.log(info);

      $(".discount-items").html(template("tpl", info));
      info.page = Math.ceil(info.totalCount / info.pagesize);
      maxPage = info.page;
    })
  })

  // 点击上一页
  $(".prev").on("click", function () {
    pageid--;
    if (pageid < 1) {
      pageid = 1;
      return;
    }
    $("#selectPage").val(pageid);
    Route.getproductlist(categoryid, pageid, function (info) {
      //console.log(info);
      $(".discount-items").html(template("tpl", info));
    })
  })

  $("#selectPage").on("change",function(){
      pageid = $(this).val();
      Route.getproductlist(categoryid, pageid, function (info) {
        //console.log(info);
        $(".discount-items").html(template("tpl", info));
      })
  })

}) 