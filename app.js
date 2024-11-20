$(document).ready(function () {         
    $("#hide-btn").click(function () {
        $("#image").hide();
        $("#page-title").text("¡No tenemos ninguna imagen!");
    });
    
    $("#show-btn").click(function () {
        $("#image").show();
        $("#page-title").text("¡Mirá la siguiente imagen!");
    });
});