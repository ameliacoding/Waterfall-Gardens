$(function(){
    $( "#menu_content h4" ).click(function() {
        $(this).next().slideToggle( "slow" );
    });
});
