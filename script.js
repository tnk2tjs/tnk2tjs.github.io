$(function(){
  $(".back").on("click",function(){
    $("li.selected").removeClass("selected");
    $("#tabmenu_1").addClass("selected");

    $("#content > div").hide();
    $("#tabcontent_1").fadeIn();
  })

  $("ul").on("click","li",function(){
    //selectedのつけたり外したり
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");

    //tabのIDを取得
    tabID=this.id.split("_")[1];
    $("#content > div").hide();
    $("#tabcontent_" + tabID).fadeIn();
  })
  $(".back").trigger("click");

  //スマフォだったら上に行く
  $(".back").click(function(){
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
    }
  });

  //リンクを新しいタブで開く
  $('a').attr({'target':'_blank'});
});
