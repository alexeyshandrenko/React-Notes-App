import { useContext } from "react";

import { NotesDataContext } from "../../../pages/Home/Home";

import styles from "./styles/right-top-bar.module.scss";

import NoteService from "../../../services/NoteService";

import { IconButton } from "@mui/material";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const RightTopBar = () => {
  const { setAllNotesData } = useContext(NotesDataContext);

  const createNote = () => {
    NoteService.createNote(setAllNotesData);
  };

  return (
    <div className={styles.topbar}>
      <div className="topbar__left">
        <IconButton
          className={styles.button}
          size="large"
          color="primary"
          aria-label="create picture"
          onClick={createNote}
        >
          <AddBoxOutlinedIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default RightTopBar;
