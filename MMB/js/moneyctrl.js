
$(function () {

  // 渲染第一页
  Route.getmoneyctrl(function (info) {
    $(".mmB-container").html(template("tpl", info));
    var page = Math.ceil(info.totalCount/info.pagesize);
    info.page = page;
  // console.log(info);
    $('#selectPage').html(template('tpl2',info));
  })

  var pageid = 1;
  var maxpage;
  $(".next").on("click",function(){
    pageid++;
    if(pageid > maxpage){
      pageid = maxpage;
      return;
    }
    $('#selectPage').val(pageid);

    Route.getmoneyctrl(pageid-1,function (info) {
      $(".mmB-container").html(template("tpl", info));
      var page = Math.ceil(info.totalCount/info.pagesize);
      maxpage = page;
    })
    
  })
  
  $(".prev").on("click",function(){
    pageid--;
    if(pageid <= 0){
      pageid = 1;
      return;
    }
    $('#selectPage').val(pageid);

    Route.getmoneyctrl(pageid-1,function (info) {
      $(".mmB-container").html(template("tpl", info));
    })
  })

  $('#selectPage').on('change',function(){
    pageid = $(this).val();
    Route.getmoneyctrl(pageid-1,function (info) {
      $(".mmB-container").html(template("tpl", info));
    })

    // location.search= "moneyctrl.html?pageid="+pageid;
  })
})

