$( function(){
  var run_carousel = "";
  var startCarousel = function(time){
    if (run_carousel !== ""){
      return false;
    }
    
    run_carousel = setInterval( function(){
      $("#carousel li:first-child").removeClass("active").next('li').addClass("active").end().appendTo("#carousel");
    }, time); 
  };
  
  startCarousel(3000);
  
  $("#start").click( function(e){
    e.preventDefault();
    startCarousel(3000);
  });
  
  $("#stop").click( function(e){
    e.preventDefault();
    clearInterval(run_carousel);
    run_carousel = "";
  });
  
  $("#previous").click( function(e){
    e.preventDefault();
    
    $("#carousel li:first-child").removeClass("active");
    $("#carousel li:last-child").addClass("active").prependTo("#carousel");
  });
  
  $("#next").click( function(e){
    e.preventDefault();
    
    $("#carousel li.active").removeClass("active").next("li").addClass("active").end().appendTo("#carousel");
  });
  
});



