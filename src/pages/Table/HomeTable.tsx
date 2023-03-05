import { useState, useEffect, createContext } from "react";

import styles from "./styles/home-table.module.scss";

import { createCollectionsInIndexedDB } from "../../db/indexeddb";
import NoteService from "../../services/NoteService";

import TableTopBar from "../../components/TopBar/TableTopBar/TableTopBar";
import TableNotes from "../../components/Notes/TableNotes";

import { INote } from "../../models/Note/INote";
import { NotesTableDataContextProps } from "../../context/types/types";

export const NotesTableDataContext = createContext<NotesTableDataContextProps>(
  {} as NotesTableDataContextProps
);

const HomeTable = () => {
  const [allNotesData, setAllNotesData] = useState<INote[]>([]);
  const [findedNotesData, setFindedNotesData] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<INote>({} as INote);
  const [activateSearch, setActivateSearch] = useState<boolean>(false);
  const [editDataModal, setEditDataModal] = useState<boolean>(false);
  const [activeStyleText, setActiveStyleText] = useState<boolean>(false);

  useEffect(() => {
    createCollectionsInIndexedDB();
    NoteService.getNotes(setAllNotesData);
  }, []);

  const value = {
    setAllNotesData,
    allNotesData,
    setSelectedNote,
    selectedNote,
    findedNotesData,
    setFindedNotesData,
    activateSearch,
    setActivateSearch,
    editDataModal,
    setEditDataModal,
    activeStyleText,
    setActiveStyleText,
  };

  return (
    <div className={styles.tables}>
      <NotesTableDataContext.Provider value={value}>
        <TableTopBar />
        <TableNotes />
      </NotesTableDataContext.Provider>
    </div>
  );
};

export default HomeTable;
