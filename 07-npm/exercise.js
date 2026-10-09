
import dayjs from "dayjs";

/**
 * Formats a date as DD/MM/YYYY.
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * Returns the year as a number.
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Adds a number of days to a date.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package you chose from npm.
 */
export const myPackage = "nanoid";
  