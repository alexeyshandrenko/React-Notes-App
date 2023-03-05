import { useContext, useState } from "react";

import ModalWindow from "../../ModalWindow/ModalWindow";

import { NotesDataContext } from "../../../pages/Home/Home";

import styles from "./styles/left-top-bar.module.scss";

import { INote } from "../../../models/Note/INote";

import NoteService from "../../../services/NoteService";
import { isEmpty } from "../../../utils/functions";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";

const LeftTopBar = () => {
  const { setAllNotesData, selectedNote, setSelectedNote } =
    useContext(NotesDataContext);

  const [modal, setModal] = useState<boolean>(false);

  const deleteNote = () => {
    NoteService.deleteNoteById(setAllNotesData, selectedNote.id);
    setSelectedNote({} as INote);
  };

  return (
    <div className={styles.topbar}>
      <div className="topbar__left">
        <IconButton
          className={styles.button}
          size="large"
          color="primary"
          aria-label="list picture"
        >
          <FormatListBulletedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          className={styles.button}
          size="large"
          color="primary"
          aria-label="blocks picture"
        >
          <GridViewOutlinedIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="topbar__right">
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

export default LeftTopBar;
