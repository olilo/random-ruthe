$(function() {
    function randomRuthe() {
        var stripNumber = Math.floor(Math.random() * 2067);
        var stripNumberString = "" + stripNumber;
        while (stripNumberString.length < 4) {
            stripNumberString = "0" + stripNumberString;
        }
        var img = new Image();
        img.src = "http://www.ruthe.de/cartoons/strip_" + stripNumberString + ".jpg";
        img.className="d-block mx-auto";
        $("#comic").html("").append(img);
    }

    $('#new-ruthe-comic').click(randomRuthe);
    $('#comic').click(randomRuthe);
    randomRuthe();
});