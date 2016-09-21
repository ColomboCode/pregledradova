$(document).ready(function(){

$(window).resize(function() {

	if( $(window).width() <= 767 ) {
        $(".meni").hide(); 
    }

    if( $(window).width() >=768 ) {
        $(".meni").show(); 
    }

    
});
});




$(document).ready(function(){
	
$(".mimg").click(function () {
$(".meni").toggle();  
});

});


