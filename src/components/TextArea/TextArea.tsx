import { useState, useContext } from "react";

import { NotesDataContext } from "../../pages/Home/Home";

import {
  getCurrentTime,
  getDescriptionData,
  isEmpty,
} from "../../utils/functions";

import styles from "./styles/text-area.module.scss";

import NoteService from "../../services/NoteService";

import { Typography } from "@mui/material";
import { INote } from "../../models/Note/INote";

const TextArea = () => {
  const { selectedNote, setAllNotesData } = useContext(NotesDataContext);

  const { id, title, text, time } = selectedNote || {};

  const [note, setNote] = useState<Partial<INote>>({
    title,
    text,
  });

  const updateNote = (e: any) => {
    const { value, name } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    NoteService.updateNote(
      { id, title: note.title, text: note.text },
      setAllNotesData
    );
  };

  return (
    <div className={styles.area}>
      {!isEmpty(selectedNote) && (
        <>
          <Typography className={styles.area__date} variant="body1">
            {getDescriptionData(time)}
          </Typography>
          <input
            className={styles.area__title}
            type="text"
            name="title"
            value={note.title}
            onChange={updateNote}
          />
          <textarea
            className={styles.area__textarea}
            name="text"
            value={note.text}
            onChange={updateNote}
          />
        </>
      )}
    </div>
  );
};

export default TextArea;
