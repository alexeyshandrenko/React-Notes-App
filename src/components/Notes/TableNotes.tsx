import styles from "./styles/table-notes.module.scss";

import { useContext, useState } from "react";

import { NotesTableDataContext } from "../../pages/Table/HomeTable";

import { isEmptyArray } from "../../utils/functions";

import TableNote from "../Note/TableNote";
import TableTextArea from "../TextArea/TableTextArea";

import { INote } from "../../models/Note/INote";

const TableNotes = () => {
  const { allNotesData, findedNotesData, activateSearch, editDataModal } =
    useContext(NotesTableDataContext);

  return (
    <>
      {editDataModal ? (
        <TableTextArea />
      ) : (
        <ul className={styles.notes}>
          {!activateSearch &&
            !isEmptyArray(allNotesData) &&
            allNotesData.map((note: INote) => {
              const { id, title, time, text } = note;
              return (
                <TableNote
                  key={id}
                  id={id}
                  title={title}
                  time={time}
                  text={text}
                />
              );
            })}
          {activateSearch &&
            findedNotesData &&
            findedNotesData.map((note: any) => {
              const { id, title, time, text } = note;
              return (
                <TableNote
                  key={id}
                  id={id}
                  title={title}
                  time={time}
                  text={text}
                />
              );
            })}
        </ul>
      )}
    </>
  );
};

export default TableNotes;
