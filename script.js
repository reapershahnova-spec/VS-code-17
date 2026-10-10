var songs = ["zoom", "bounce", "glow", "rush", "spark"];
var plays = [320, 85, 210, 50, 175];
document.getElementById("nameResult").innerHTML = "Songs: " + songs;
document.getElementById("comeResult").innerHTML = "Plays: " + plays;
document.getElementById("labelResult").innerHTML = "Press The Button Above";

function sortAZ() {
    songs.sort();
    document.getElementById("nameResult").innerHTML = "A to Z: " + songs;
}
function sortZA() {
    songs.sort();
    songs.reverse();
    document.getElementById("nameResult").innerHTML = "Z to A: " + songs;
}
function sortleast() {
    plays.sort(function(a, b) {return a - b;});
    document.getElementById("countResult").innerHTML = "Least played first: " + plays;
}
function sortMost() {
    plays.sort(function(a, b) {return b - a;});
    document.getElementById("countResult").innerHTML = "Most played  " + plays;
}
function addLabel() {
    var l = plays.map(function(c) {
        return c + " plays";});
    document.getElementById("labelResult").innerHTML = "Labelled: " + l;
}


