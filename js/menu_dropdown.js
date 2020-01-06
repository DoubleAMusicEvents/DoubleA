$(document).ready(function() {
    $(".toggle").click(function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fa fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fa fa-times'></i>");
        }
    });
    $('.item').click(function() {
        $('.item').removeClass("active");
        $('.toggle').find("a").html("<i class='fa fa-bars'></i>");
    })
});