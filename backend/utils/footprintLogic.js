function calculateFootprint(data) {
  let total = 0;
  total += data.carKm * 0.21;
  total += data.flightHours * 90;

  if (data.diet === "meat-heavy") total += 2000;
  if (data.diet === "vegetarian") total += 1200;
  if (data.diet === "vegan") total += 800;

  total += data.electricityKwh * 0.5;
  return total;
}

module.exports = { calculateFootprint };
