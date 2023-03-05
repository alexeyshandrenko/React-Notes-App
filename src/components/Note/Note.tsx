import { FC, useContext } from "react";

import { NotesDataContext } from "../../pages/Home/Home";

import styles from "./styles/note.module.scss";

import { INote } from "../../models/Note/INote";

import { Typography } from "@mui/material";

import { getCurrentTime, getSubstringText } from "../../utils/functions";

import { BASE_TEXT } from "../../utils/contants";

const Note: FC<INote> = ({ id, title, time, text }) => {
  const { selectedNote, setSelectedNote } = useContext(NotesDataContext);

  const selectNote = () => {
    setSelectedNote({ id, title, time, text });
  };

  return (
    <li
      onClick={selectNote}
      className={
        selectedNote.id !== id
          ? styles.note
          : `${styles.note} ${styles.note_active}`
      }
    >
      <Typography className={styles.note__title} variant="h6">
        {getSubstringText(title, 40)}
      </Typography>
      <div className={styles.note__description}>
        <Typography className={styles.note__time} variant="subtitle2">
          {getCurrentTime(time)}
        </Typography>
        <Typography className={styles.note__text} variant="body2">
          {text ? getSubstringText(text, 40) : BASE_TEXT}
        </Typography>
      </div>
    </li>
  );
};

export default Note;
