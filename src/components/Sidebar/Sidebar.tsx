import { useState, useEffect } from "react";

import styles from "./styles/sidebar.module.scss";

import { INote } from "../../models/Note/INote";

import NoteService from "../../services/NoteService";

import LeftTopBar from "../TopBar/LeftTopBar/LeftTopBar";
import Title from "../Title.tsx/Title";
import Notes from "../Notes/Notes";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <LeftTopBar />
      <Notes />
    </aside>
  );
};

export default Sidebar;
