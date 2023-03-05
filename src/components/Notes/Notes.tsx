import { useContext } from "react";

import { NotesDataContext } from "../../pages/Home/Home";

import styles from "./styles/notes.module.scss";

import Note from "../Note/Note";

const Notes = () => {
  const { allNotesData } = useContext(NotesDataContext);

  return (
    <ul className={styles.notes}>
      {allNotesData &&
        allNotesData.map((note: any) => {
          const { id, title, time, text } = note;
          return (
            <Note key={id} id={id} title={title} time={time} text={text} />
          );
        })}
    </ul>
  );
};

export default Notes;
