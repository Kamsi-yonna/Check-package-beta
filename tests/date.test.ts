import { toNow, formatDate, fromNow } from "../src/date";

//* tests for the toNow function
describe("toNow function", () => {
  test("should return for time exactly a second ago", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 1000));
    expect(result).toBe("1 second ago");
  });

  test("should return 'just now' for a date in the past less than a second ago", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 500));
    expect(result).toBe("just now");
  });

  test("should return the correct time difference in seconds", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 60000));
    expect(result).toBe("1 minute ago");
  });

  test("should return the correct time difference in minutes", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 3600000));
    expect(result).toBe("1 hour ago");
  });

  test("should return the correct time difference in hours", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 86400000));
    expect(result).toBe("1 day ago");
  });

  test("should return the correct time difference in days", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 604800000));
    expect(result).toBe("1 week ago");
  });

  test("should return the correct time difference in weeks", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 2592000000));
    expect(result).toBe("1 month ago");
  });

  test("should return the correct time difference in months", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 31536000000));
    expect(result).toBe("1 year ago");
  });

  test("should return the correct time difference in years", () => {
    const now = new Date();
    const result = toNow(new Date(now.getTime() - 31536000000 * 5));
    expect(result).toBe("5 years ago");
  });
});

//* tests for the formatDate function
describe("formatDate function", () => {
  test("should format a date string to the default 'YYYY-MM-DD' format", () => {
    const dateString = "2023-04-12";
    const result = formatDate(dateString);
    expect(result).toBe("2023-04-12");
  });

  test("should format a Date object to the default 'YYYY-MM-DD' format", () => {
    const dateObject = new Date(2023, 3, 12);
    const result = formatDate(dateObject);
    expect(result).toBe("2023-04-12");
  });

  test("should format a date string to the specified 'DD/MM/YYYY' format", () => {
    const dateString = "2023-04-12";
    const result = formatDate(dateString, "DD/MM/YYYY");
    expect(result).toBe("12/04/2023");
  });

  test("should format a Date object to the specified 'MMM DD, YYYY' format", () => {
    const dateObject = new Date(2023, 3, 12);
    const result = formatDate(dateObject, "MMM DD, YYYY");
    expect(result).toBe("Apr 12, 2023");
  });

  test("should format a date string to the specified 'HH:mm:ss' format", () => {
    const dateString = "2023-04-12T15:30:00";
    const result = formatDate(dateString, "HH:mm:ss");
    expect(result).toBe("15:30:00");
  });
});

//* tests for the fromNow function
describe("fromNow function", () => {
  test("should return the time difference in years", () => {
    const result = fromNow(new Date(new Date().getTime() - 31536000000 * 5)); // 5 years ago
    expect(result).toBe("5 years from now");
  });

  test("should return the time difference in months", () => {
    const result = fromNow(new Date(new Date().getTime() - 2592000000 * 2)); // 2 months ago
    expect(result).toBe("2 months from now");
  });

  test("should return the time difference in weeks", () => {
    const result = fromNow(new Date(new Date().getTime() - 604800000 * 3)); // 3 weeks ago
    expect(result).toBe("3 weeks from now");
  });

  test("should return the time difference in days", () => {
    const result = fromNow(new Date(new Date().getTime() - 86400000 * 4)); // 4 days ago
    expect(result).toBe("4 days from now");
  });

  test("should return the time difference in hours", () => {
    const result = fromNow(new Date(new Date().getTime() - 3600000 * 6)); // 6 hours ago
    expect(result).toBe("6 hours from now");
  });

  test("should return the time difference in minutes", () => {
    const result = fromNow(new Date(new Date().getTime() - 60000 * 7)); // 7 minutes ago
    expect(result).toBe("7 minutes from now");
  });

  test("should return the time difference in seconds", () => {
    const result = fromNow(new Date(new Date().getTime() - 1000 * 8)); // 8 seconds ago
    expect(result).toBe("8 seconds from now");
  });
});
