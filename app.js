function onLoad() {
    alert("Thanks for visiting this page :-)");
    document.getElementById("timestamp").innerHTML = Date();
}
function checkNumber() {
    
    var theNumber, theMessage;

    theNumber = document.getElementById("smallnumber").value;
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else {
        theMessage = "Thank you!";
    }
        document.getElementById("numberMessage").innerHTML = theMessage;
}