import moment from "moment";

export const setExpirationToken = (token: string): string => {
  const expirationDate = moment().add(20, "days").toDate();
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate.toISOString());
  return expirationDate.toISOString();
}

export const getExpirationToken = (): string | null => {
  const expirationDate = localStorage.getItem("expirationDate");
  if (!expirationDate) {
    return null;
  }
  return expirationDate;
}

export const removeExpirationToken = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
}

export const isTokenExpired = (): boolean => {
  const expirationDate = getExpirationToken();
  if (!expirationDate) {
    return true;
  }
  return moment().isAfter(expirationDate);
}

export const getToken = (): string => {
  const token = localStorage.getItem("token");
  if (!token) {
    return "";
  }
  if (isTokenExpired()) {
    removeExpirationToken();
    return "";
  }
  return token;
}