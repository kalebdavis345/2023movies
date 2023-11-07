$(document).ready(() => {
    $('#spiderverse').on('click', () => {
        $('#spiderverse-moreinfo').toggle();
    })

    $('#oppenheimer').on('click', () => {
        $('#oppenheimer-moreinfo').toggle();
    })

    $('#jw4').on('click', () => {
        $('#jw4-moreinfo').toggle();
    })

    $('button').on('click', () => {
        $('#wakeburial').show();
        $('button').hide();
    })
});