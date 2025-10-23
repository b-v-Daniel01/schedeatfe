/**
 * WeekDays written in lowercase, only in english, to use for url's and non-label
 */
export const WeekdayLC = {
  MONDAY: "monday",
  TUESDAY: "tuesday",
  WEDNESDAY: "wednesday",
  THURSDAY: "thursday",
  FRIDAY: "friday",
  SATURDAY: "saturday",
  SUNDAY: "sunday",
} as const;

export type WeekdayLC = (typeof WeekdayLC)[keyof typeof WeekdayLC];
