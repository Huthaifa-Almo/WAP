

$(function(){
    pupulat();
    $("#add").click(add);
    $("#kill").click(kill);
    $("#cleanup").click(cleanup);
    $("#enrage").click(enrageRaptor);
    $("#stomp").click(stomp);
    $("#patrol").click(patrol);
})

function patrol() {
    clearInterval(timer);
    timer = setInterval(patrolRight, 20);
}

function patrolRight() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) >= 300) {
            clearInterval(timer);
            timer = setInterval(patrolLeft, 20);
        }
        return parseInt(old) + 4 + 'px'
    });
}
function patrolLeft() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) <= 10) {
            clearInterval(timer);
            $(this).css({
                'top': '5px',
                'left': '10px'
            });
        }
        return parseInt(old) - 4 + 'px';
    });
}
function stomp() {
    $('#raptor').css('top', function(idx, old) {
        return ((parseInt(old) + 75) % 150) + 'px';
    });
    splat('boy');
    splat('girl');
}
function enrageRaptor() {
    // If enraged -- go back to normal, else get ENRAGED
    if ($('#raptor').hasClass('enrage')) {
        $('h1').first().removeClass('enrage');
        $('#raptor')
            .removeClass('enrage')
            .width(function(idx, old) {
                return old - 50;
            });
    } else {
        $('h1').first().addClass('enrage');
        $('#raptor')
            .addClass('enrage')
            .width(function(idx, old) {
                return old + 50
            });
    }
}
function pupulat(){
    $("#people .person").addClass("boy");
}

function getGender() {
    return $('input:checked').val();
}

function add() {

    $('#people').append( $('<div>').addClass('person ' + getGender()));

}

function kill(){

    var peeps = $('#people .' + getGender());
    for (var i = 0; i < peeps.length / 5; i++) {
        var randomIndex = Math.floor(Math.random() * peeps.length);
        $(peeps[randomIndex]).removeClass(getGender());
        $(peeps[randomIndex]).addClass('splat');
    }
}
function cleanup(){
    $("#people .splat").remove();
}