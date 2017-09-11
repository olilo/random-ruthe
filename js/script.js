/**
 * Created by oliver on 11.09.2017.
 */

$(function() {
    function randomRuthe() {
        var stripNumber = Math.floor(Math.random() * 3121);
        $('#comic').attr('src', 'http://www.ruthe.de/cartoon/' + stripNumber);
    }

    $('#new-comic').click(randomRuthe);
    randomRuthe();
});