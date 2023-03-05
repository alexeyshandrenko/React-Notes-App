import { useContext } from "react";

import { NotesDataContext } from "../../pages/Home/Home";

import styles from "./styles/notes.module.scss";

import { isEmptyArray } from "../../utils/functions";

import Note from "../Note/Note";

import { INote } from "../../models/Note/INote";

const Notes = () => {
  const { allNotesData, findedNotesData, activateSearch } =
    useContext(NotesDataContext);

  return (
    <ul className={styles.notes}>
      {!activateSearch &&
        !isEmptyArray(allNotesData) &&
        allNotesData.map((note: INote) => {
          const { id, title, time, text } = note;
          return (
            <Note key={id} id={id} title={title} time={time} text={text} />
          );
        })}
      {activateSearch &&
        findedNotesData &&
        findedNotesData.map((note: any) => {
          const { id, title, time, text } = note;
          return (
            <Note key={id} id={id} title={title} time={time} text={text} />
          );
        })}
    </ul>
  );
};

export default Notes;
