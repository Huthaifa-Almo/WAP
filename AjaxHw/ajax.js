"use strict";

$(function() {
    $('#hw').change(function() {
        var file = 'http://mumstudents.org/~rshrestha/homework-ajax/homeworks/' + $('#hw').val();
        $.ajax({
            crossOrigin: true,
            'url': file,
            'type': 'GET',
            dataType: '',
            'success': ajaxSuccess,
            'error': ajaxFailure
        });

    });
});

function ajaxSuccess(data) {
    alert(data);
    $('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
    alert('hi');
    console.log(xhr, status, exception);
}

//$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');
