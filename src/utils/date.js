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
