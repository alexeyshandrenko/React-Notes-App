import { FC, useContext } from "react";

import { NotesTableDataContext } from "../../pages/Table/HomeTable";

import { INote } from "../../models/Note/INote";

import styles from "./styles/table-note.module.scss";

import { getCurrentTime, getSubstringText } from "../../utils/functions";

import { BASE_TEXT } from "../../utils/contants";

import { Typography } from "@mui/material";

const TableNote: FC<INote> = ({ id, title, time, text }) => {
  const { selectedNote, setSelectedNote, setEditDataModal } = useContext(
    NotesTableDataContext
  );

  const selectNote = () => {
    setSelectedNote({ id, title, time, text });
  };

  return (
    <li
      onDoubleClick={() => setEditDataModal(true)}
      onClick={selectNote}
      className={styles.note}
    >
      <div
        className={
          selectedNote.id !== id
            ? styles.note__block
            : `${styles.note__block} ${styles.note__block_active}`
        }
      >
        <Typography className={styles.note__title} variant="subtitle2">
          {getSubstringText(title, 35)}
        </Typography>
        <Typography className={styles.note__text} variant="body2">
          {text ? getSubstringText(text, 35) : BASE_TEXT}
        </Typography>
      </div>
      <Typography className={styles.note__subtitle} variant="h6">
        {getSubstringText(title, 20)}
      </Typography>
      <Typography className={styles.note__time} variant="body2">
        {getCurrentTime(time)}
      </Typography>
    </li>
  );
};

export default TableNote;
