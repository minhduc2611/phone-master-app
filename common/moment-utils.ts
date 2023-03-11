import moment from "moment";

export enum FORMAT {
    CREATED_DATE = "YYYY-MM-DD HH:mm Z",
    DUE = "YYYY-MM-DD HH:mm"
}
export const getCurrentTime = (format = FORMAT.DUE) => {
  return moment().format(format);
};
