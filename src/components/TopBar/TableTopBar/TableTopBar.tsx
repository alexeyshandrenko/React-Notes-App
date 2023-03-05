import { useContext, useState } from "react";

import { NotesTableDataContext } from "../../../pages/Table/HomeTable";

import { useNavigate } from "react-router-dom";

import styles from "./styles/table-top-bar.module.scss";

import NoteService from "../../../services/NoteService";

import { INote } from "../../../models/Note/INote";

import { findNotesByText, isEmpty } from "../../../utils/functions";

import Search from "../../ui/search/Search";
import ModalWindow from "../../ModalWindow/ModalWindow";

import { IconButton } from "@mui/material";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const TableTopBar = () => {
  const navigate = useNavigate();

  const {
    allNotesData,
    setAllNotesData,
    setFindedNotesData,
    setActivateSearch,
    selectedNote,
    setSelectedNote,
    setEditDataModal,
    editDataModal,
    setActiveStyleText,
    activeStyleText,
  } = useContext(NotesTableDataContext);

  const [modal, setModal] = useState<boolean>(false);

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

  const deleteNote = () => {
    NoteService.deleteNoteById(setAllNotesData, selectedNote.id);
    setSelectedNote({} as INote);
  };

  const createNote = () => {
    NoteService.createNote(setAllNotesData);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__left}>
        <div className={styles.topbar__leftContainer}>
          <IconButton
            className={styles.button}
            size="large"
            color="primary"
            aria-label="list picture"
            onClick={() => navigate("/")}
          >
            <FormatListBulletedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            className={`${styles.button} ${styles.button_selected}`}
            size="large"
            color="primary"
            aria-label="blocks picture"
            onClick={() => navigate("/table")}
          >
            <GridViewOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            className={styles.button}
            size="large"
            color="primary"
            aria-label="blocks picture"
            onClick={() => setEditDataModal(false)}
            disabled={!editDataModal}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
        </div>
        <IconButton
          className={styles.button}
          size="large"
          aria-label="garbage picture"
          onClick={() => setModal(true)}
          disabled={isEmpty(selectedNote)}
        >
          <DeleteOutlineIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={styles.topbar__right}>
        <div className={styles.topbar__rightConteiner}>
          <IconButton
            className={styles.button}
            size="large"
            aria-label="create picture"
            sx={{
              margin: "0 60px 0 0",
            }}
            onClick={createNote}
            disabled={Boolean(search)}
          >
            <AddBoxOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            className={
              !activeStyleText
                ? styles.button
                : `${styles.button} ${styles.button_active}`
            }
            size="large"
            aria-label="style text picture"
            onClick={() => setActiveStyleText((prev) => !prev)}
          >
            <TextFieldsIcon fontSize="inherit" />
          </IconButton>
        </div>
        <Search
          type="text"
          placeholder="Поиск"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </div>
      {modal && (
        <ModalWindow
          open={modal}
          setOpen={setModal}
          handleDelete={deleteNote}
        />
      )}
    </div>
  );
};

export default TableTopBar;
