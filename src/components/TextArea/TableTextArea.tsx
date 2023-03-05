import { useState, useEffect, useContext } from "react";

import { NotesTableDataContext } from "../../pages/Table/HomeTable";

import {
  getCurrentRoute,
  getCurrentTime,
  getDescriptionData,
  isEmpty,
} from "../../utils/functions";

import styles from "./styles/text-area.module.scss";

import NoteService from "../../services/NoteService";

import { Typography } from "@mui/material";
import { INote } from "../../models/Note/INote";

const TableTextArea = () => {
  const { selectedNote, setAllNotesData, activeStyleText } = useContext(
    NotesTableDataContext
  );

  const [note, setNote] = useState<Partial<INote>>({
    id: "",
    title: "",
    text: "",
  });

  const updateNote = async (e: any) => {
    const { value, name } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    NoteService.updateNote(
      {
        id: note.id,
        title: name === "title" ? value : note.title,
        text: name === "text" ? value : note.text,
      },
      setAllNotesData
    );
  };

  useEffect(() => {
    setNote((prev) => ({
      ...prev,
      id: selectedNote.id,
      title: selectedNote.title,
      text: selectedNote.text,
    }));
  }, [selectedNote]);

  return (
    <div className={styles.area}>
      {!isEmpty(selectedNote) && (
        <>
          <Typography className={styles.area__date} variant="body1">
            {getDescriptionData(selectedNote.time)}
          </Typography>
          <input
            className={
              !activeStyleText
                ? styles.area__title
                : `${styles.area__title} ${styles.area__title_active}`
            }
            type="text"
            name="title"
            value={note.title}
            onChange={updateNote}
          />
          <textarea
            className={
              !activeStyleText
                ? styles.area__textarea
                : `${styles.area__textarea} ${styles.area__textarea_active}`
            }
            name="text"
            value={note.text}
            onChange={updateNote}
          />
        </>
      )}
    </div>
  );
};

export default TableTextArea;
