/**
 * Gets the current year
 */
function getCurrentYear() {
    let current_year = new Date().getFullYear();
    document.getElementById("year").innerHTML = current_year;
}

getCurrentYear();