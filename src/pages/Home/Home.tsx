import { useState, useEffect, createContext } from "react";

import styles from "./styles/home.module.scss";

import { createCollectionsInIndexedDB } from "../../db/indexeddb";
import NoteService from "../../services/NoteService";

import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

import { INote } from "../../models/Note/INote";
import { NotesDataContextProps } from "../../context/types/types";

export const NotesDataContext = createContext<NotesDataContextProps>(
  {} as NotesDataContextProps
);

const Home = () => {
  const [allNotesData, setAllNotesData] = useState<INote[]>([]);
  const [findedNotesData, setFindedNotesData] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<INote>({} as INote);
  const [activateSearch, setActivateSearch] = useState<boolean>(false);
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
    activeStyleText,
    setActiveStyleText,
  };

  return (
    <div className={styles.home}>
      <NotesDataContext.Provider value={value}>
        <Sidebar />
        <Content />
      </NotesDataContext.Provider>
    </div>
  );
};

export default Home;
