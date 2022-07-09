$(function() {
    function randomRuthe() {
	// this is taken directly from the page, should be fetched dynamically (somehow)
	var maxStripNumber = 2309;
        var stripNumber = Math.floor(Math.random() * maxStripNumber);
        var stripNumberString = "" + stripNumber;
        while (stripNumberString.length < 4) {
            stripNumberString = "0" + stripNumberString;
        }
        var img = new Image();
        img.src = "https://ruthe.de/cartoons/strip_" + stripNumberString + ".jpg";
        img.className="d-block mx-auto";
        $("#comic").html("").append(img);
    }

    $('#new-ruthe-comic').click(randomRuthe);
    $('#comic').click(randomRuthe);
    randomRuthe();
});
