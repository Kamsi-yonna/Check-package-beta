/**
 * Get the time difference between the provided date and the current time.
 * @param {string | number | Date | dayjs.Dayjs | null | undefined} date - The date to compare against the current time.
 * @returns {string} A string representing the time difference, e.g., "1 second ago", "in 2 minutes", "just now".
 */

export const toNow = (date: Date | string): string => {
  date = new Date(date);

  const now = new Date();
  const distanceInMillis = Math.abs(now.getTime() - date.getTime());
  const distanceInSeconds = Math.floor(distanceInMillis / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (distanceInSeconds <= 0) return "just now";

  for (const [unit, seconds] of Object.entries(intervals)) {
    const inUnit = Math.floor(distanceInSeconds / seconds);
    if (inUnit >= 1) {
      const futureDatePrefix = now.getTime() < date.getTime() ? "in " : "";
      return `${futureDatePrefix}${inUnit} ${unit}${inUnit === 1 ? "" : "s"} ${
        now.getTime() > date.getTime() ? "ago" : ""
      }`.trim();
    }
  }

  return "just now";
};

// Example usage:

/**
 * Formats a date string or Date object to the specified date-time format.
 * @param {string | Date} date - The date to be formatted.
 * @param {string} [format="YYYY-MM-DD"] - The desired date-time format.
 * @returns {string} The formatted date-time string.
 */

export const formatDate = (
  date: Date | string,
  format: string = "YYYY-MM-DD"
): string => {
  date = new Date(date);

  const pad = (value: number) => String(value).padStart(2, "0");

  const day = date.getDate();
  const month = date.getMonth() + 1; // Note: getMonth() returns 0-based index
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthAbbr: string = monthNames[date.getMonth()]; // Get abbreviated month name

  return format
    .replace("YYYY", String(year))
    .replace("MMM", monthAbbr) // Replace with abbreviated month name
    .replace("MM", pad(month))
    .replace("DD", pad(day))
    .replace("HH", pad(hours))
    .replace("mm", pad(minutes))
    .replace("ss", pad(seconds));
};

/**
 * Calculates the time difference from the provided date to the current time.
 * Returns a human-readable string representing the time difference in years, months, weeks, days, hours, minutes, or seconds.
 * @param {string | number | Date | dayjs.Dayjs | null | undefined} date - The date to calculate the time difference from.
 * @returns {string} A string indicating the time difference from the provided date to the current time.
 */

export const fromNow = (date: Date | string): string => {
  date = new Date(date);

  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} years from now`;
  else if (months > 0) return `${months} months from now`;
  else if (weeks > 0) return `${weeks} weeks from now`;
  else if (days > 0) return `${days} days from now`;
  else if (hours > 0) return `${hours} hours from now`;
  else if (minutes > 0) return `${minutes} minutes from now`;
  else return `${seconds} seconds from now`;
};
