import L from "leaflet";
// CALCULATE PLANE POSITION
export function calculatePlanePosition(flyFrom, flyTo, progress) {
  const lat = flyFrom[0] + (flyTo[0] - flyFrom[0]) * (progress / 100);
  const lon = flyFrom[1] + (flyTo[1] - flyFrom[1]) * (progress / 100);
  return [lat, lon];
}

// CREATE TIMESTAMP OF DEPARTURE
export function startFlight() {
  const departureTime = new Date().getTime();
  const aircraftSpeed = 0.78 * 1234.8;
  const routeLength = 1;
}

// CALCULATE THE REMAINING PERCENTAGE OF THE FLIGHT UNTIL LANDING
export function calculateRemainingTimePercentage(
  departureTime,
  landingTime,
  currentTime
) {
  const departureTimestamp = new Date(departureTime).getTime();
  const landingTimestamp = new Date(landingTime).getTime();
  const currentTimestamp = new Date(currentTime).getTime();
  const totalFlightTime = landingTimestamp - departureTimestamp;
  const elapsedTime = currentTimestamp - departureTimestamp;
  const remainingTime = Math.max(0, totalFlightTime - elapsedTime);
  const percentageRemaining = (remainingTime / totalFlightTime) * 100;

  return percentageRemaining;
}

// ADD MINUTES TO THE TIMESTAMP TO CALCULATE THE LANDING TIME
export function addMinutesToTimestamp(timestamp, minutesToAdd) {
  const millisecondsToAdd = minutesToAdd * 60000; // 1 minute = 60000 milliseconds
  const newTimeStamp = timestamp + millisecondsToAdd;
  return newTimeStamp;
}

// CALCULATE HOW MANY MINUTES ARE LEFT UNTIL LANDING
export function getMinutesDifference(timestamp1, timestamp2) {
  const differenceInMilliseconds = Math.abs(timestamp2 - timestamp1);
  const differenceInMinutes = differenceInMilliseconds / (1000 * 60); // 1 minute = 60 seconds = 60,000 milliseconds
  return differenceInMinutes;
}

// CALCUTATE DISTANCE BETWEEN THE TWO POINTS
export function calculateDistance(from, to, airport1, airport2) {
  const fromLatLng = L.latLng(from);
  const toLatLng = L.latLng(to);

  const dis: any = fromLatLng.distanceTo(toLatLng).toFixed(2);
  console.log("distance:", dis / 1000, airport1, airport2); // airport1 and airport2 used for debugging purposes. There's no need for them
  return dis;
}

// // Example usage:
// const timestamp1 = Date.now(); // First timestamp (e.g., current time)
// const timestamp2 = timestamp1 + 30 * 60 * 1000; // Second timestamp, 30 minutes later
// const difference = getMinutesDifference(timestamp1, timestamp2);
// console.log(difference); // Output: 30 (minutes)

// // Example usage:
// const departureTime = 1710517078393; // Replace with your actual departure time
// const landingTime = addMinutesToTimestamp(departureTime, 60); // Replace with your actual landing time
// const currentTime = new Date().getTime(); // Use the current time

// const percentageRemaining = calculateRemainingTimePercentage(
//   departureTime,
//   landingTime,
//   currentTime
// );
// console.log(
//   percentageRemaining,
//   "departure:",
//   departureTime,
//   "arrival:",
//   new Date(landingTime).toISOString()
// );
