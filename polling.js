//Amanda

function update() {
    $.ajax({
        url: '/data-update',
        success:  function(data) {
            $('#mudarData').text(data.date);
            $('#content').text(data.content);
            update();
        },
        timeout: 500000 
    });
}

function load() {
    $.ajax({
        url: '/data',
        success: function(data) {
            $('#content').text(data.content);
            update();
        }
    });
}

$(document).ready(function() {
    load();
});
