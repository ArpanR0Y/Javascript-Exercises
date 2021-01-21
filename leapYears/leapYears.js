const leapYears = function(year) {
    return ((year % 100 != 0 ) || (year % 400 == 0)) ? (year % 4 == 0) : false;
}

module.exports = leapYears
