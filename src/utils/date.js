const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * @param {string | number | Date} date
 * @returns {string}
 */
export function parseDateDefault(date) {
  return new Date(date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * @param {string | number | Date} currentDate
 * @returns {string}
 */
export function parseDateBasicFormat(currentDate) {
  const date = new Date(currentDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${setZero(month)}-${setZero(day)}`;
}

function setZero(number) {
  return number < 10 ? `0${number}` : number;
}

function removeZero(baseDate) {
  return baseDate >= 10 ? baseDate : baseDate[1];
}

/**
 * @param {string | number | Date} fulldate
 * @returns {string}
 */
export function formatDateID(fulldate) {
  fulldate = new Date(fulldate);
  let date = fulldate.getDate();
  let month = fulldate.getMonth() + 1;
  let year = fulldate.getFullYear();
  return `${year}${setZero(month)}${setZero(date)}`;
}

/**
 * @param {string} dateID
 */
export function getDateOfFormattedDateID(dateID) {
  let year = dateID.slice(0, 4);
  let month = dateID.slice(4, 6);
  let date = dateID.slice(6);

  let parsedDate = `${removeZero(date)} ${months[removeZero(month)]} ${year}`;
  return parsedDate;
}
