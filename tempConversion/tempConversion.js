const ftoc = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return Math.round(tempInCelsius * 10) / 10;
}

const ctof = function(tempInCelsius) {
  let tempInFahrenheit = (tempInCelsius * (9 / 5)) + 32
  return Math.round(tempInFahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
