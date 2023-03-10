import { INote } from "../models/Note/INote";

export const generateUniqueId = () => {
  return Math.random().toString(16).slice(2);
};

export const getCurrentTime = (currentDate: Date) => {
  return String(currentDate).substring(16, 21);
};

export const getDescriptionData = (currentDate: Date) => {
  const date = String(currentDate);
  return `${currentDate.getDate()} ${getCurrentMonth(
    currentDate.getMonth()
  )} ${currentDate.getFullYear()} г. в ${date.substring(16, 21)}`;
};

export const getCurrentMonth = (month: number) => {
  switch (month) {
    case 0:
      return "Января";
    case 1:
      return "Февраля";
    case 2:
      return "Марта";
    case 3:
      return "Апреля";
    case 4:
      return "Мая";
    case 5:
      return "Июня";
    case 6:
      return "Июля";
    case 7:
      return "Августа";
    case 8:
      return "Сентября";
    case 9:
      return "Октября";
    case 10:
      return "Ноября";
    case 11:
      return "Декабря";
    default:
      return;
  }
};

export const sortByTimestamp = (arr: INote[]) => {
  return arr.sort(
    (a: any, b: any) => parseFloat(b.timestamp) - parseFloat(a.timestamp)
  );
};

export const getSubstringText = (text: string, len: number): string => {
  return text.length < len ? text : `${text.substring(0, len)}...`;
};

export const findNotesByText = (text: string, notes: INote[]): INote[] => {
  return text
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(text.toLowerCase()) ||
          note.text.toLowerCase().includes(text.toLowerCase())
      )
    : [];
};

export const getCurrentRoute = (pathname: string): string => {
  const arr = pathname.substring(1, pathname.length).split("/");
  return arr[arr.length - 1];
};

export const isEmpty = (obj: any): boolean => {
  return Object.keys(obj).length === 0;
};

export const isEmptyArray = <T>(obj: Array<T>): boolean => {
  return obj.length === 0;
};
