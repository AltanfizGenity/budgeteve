/**
 * @param {string | number | Date} date
 * @returns {string}
 */
export function parseDate(date) {
  return new Date(date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
