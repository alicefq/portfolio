// Toggle between adding and removing the 'responsive' class to nav when the user clicks on the Burger Icon
function navbarClick() {
    var x = document.getElementById("navbar");
    if (x.className === "top-navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "top-navbar";
    }
}