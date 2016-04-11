$(document).ready(function() {
    $('#nav-toggle').click(function(event) {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('#catnav').animate({top: "50px", left: "0px"}, 300)
        } else {
            $(this).removeClass('active');
            $('#catnav').animate({top: "50px", left: "-250px"}, 300)
        }
        return false;
    });
});