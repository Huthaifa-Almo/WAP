
$(function() {
    $(document).scroll(turtl);
});
function turtl() {

    if ($(window).scrollTop() + $(window).height() >= $(document).height()){
        $(document.body).append( $("<div>").addClass('turtle'));

    }

}