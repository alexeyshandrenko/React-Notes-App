import { useState, useContext } from "react";

import { findNotesByText, isEmpty } from "./../../../utils/functions";

import { INote } from "../../../models/Note/INote";

import { NotesDataContext } from "../../../pages/Home/Home";

import styles from "./styles/right-top-bar.module.scss";

import Search from "../../ui/search/Search";

import NoteService from "../../../services/NoteService";

import { IconButton } from "@mui/material";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TextFieldsIcon from "@mui/icons-material/TextFields";

const RightTopBar = () => {
  const {
    allNotesData,
    setAllNotesData,
    setFindedNotesData,
    setActivateSearch,
    selectedNote,
    setSelectedNote,
  } = useContext(NotesDataContext);

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEmpty(selectedNote)) {
      setSelectedNote({} as INote);
    }
    setSearch(e.target.value);
    if (e.target.value) {
      setActivateSearch(true);
      const findedNotes = findNotesByText(e.target.value, allNotesData);
      setFindedNotesData(findedNotes);
    } else {
      setActivateSearch(false);
      NoteService.getNotes(setAllNotesData);
    }
  };

  const createNote = () => {
    NoteService.createNote(setAllNotesData);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__left}>
        <IconButton
          className={styles.button}
          size="large"
          aria-label="create picture"
          onClick={createNote}
          disabled={Boolean(search)}
        >
          <AddBoxOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          className={styles.button}
          size="large"
          aria-label="style text picture"
        >
          <TextFieldsIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="topbar__right">
        <Search
          type="text"
          placeholder="Поиск"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default RightTopBar;
