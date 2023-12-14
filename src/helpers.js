export function showDate() {
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  }).format(now);
  const getNumber = dateStr.slice(-2);
  return `${dateStr}${ordinalNumberSuffix(Number(getNumber))}`;
}

//  Time
export function showTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")} : ${String(
    now.getMinutes()
  ).padStart(2, "0")}`;
}

// Wind gust
export function displayWindGust(obj) {
  return obj?.wind?.gust
    ? `${Math.round(obj.wind.gust * 3.6).toFixed(1)} km/h`
    : "none";
}

// Add suffix to date
export const ordinalNumberSuffix = function (date) {
  return `${
    date === 1 || date === 21 || date === 31
      ? "st"
      : date === 2 || date === 22
      ? "nd"
      : date === 3 || date === 23
      ? "rd"
      : "th"
  } `;
};

// Wind direction represented by N,E,S,W symbols
export const translateWindDegreesToDirection = function (degVal) {
  return degVal > 30 && degVal <= 60
    ? "NE"
    : degVal > 60 && degVal <= 120
    ? "E"
    : degVal > 120 && degVal <= 150
    ? "SE"
    : degVal > 150 && degVal <= 210
    ? "S"
    : degVal > 210 && degVal <= 240
    ? "SW"
    : degVal > 240 && degVal <= 300
    ? "W"
    : degVal > 300 && degVal <= 330
    ? "NW"
    : "N";
};
