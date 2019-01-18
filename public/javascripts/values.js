$(function(){
    $(".list-group-item").click(function(e){
      var tab = $(e.target);
      if(tab.hasClass("active")) return;

      tab.parents(".list-group").children(".list-group-item").removeClass("active");
      tab.addClass("active");

      if(tab.attr("href")){
        panel = $(tab.attr("href"));
        if(panel.hasClass("active")) return;

        panel.parents(".tab-content").children(".tab-pane").removeClass("active");
        panel.addClass("active");
      }
    });
});
