// Function to calculate wind chill factor
function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}

// Function to determine if wind chill calculation is applicable
function isWindChillApplicable(temp, wind) {
  return temp <= 10 && wind > 4.8;
}

document.addEventListener("DOMContentLoaded", function () {
  // Static values for temperature and wind speed
  const temperature = 29; // in °C
  const windSpeed = 18; // in km/h

  // Display wind chill factor
  const windChillElement = document.createElement("tr");
  const windChillLabel = document.createElement("td");
  windChillLabel.className = "label";
  windChillLabel.innerHTML = "<b>Wind Chill:</b>";

  const windChillValue = document.createElement("td");
  if (isWindChillApplicable(temperature, windSpeed)) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    windChillValue.textContent = `${windChill} °C`;
  } else {
    windChillValue.textContent = "N/A";
  }

  windChillElement.appendChild(windChillLabel);
  windChillElement.appendChild(windChillValue);

  document.querySelector(".weather table").appendChild(windChillElement);
});

const today = new Date();
const currentYear = today.getFullYear();

const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = `Last Modified ${document.lastModified}`;
