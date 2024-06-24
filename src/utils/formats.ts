import { format } from "date-fns";

export function parseDateToString(date: Date): string {
  return date.toString();
}

export function dateToDisplay(date: Date | string): string {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
