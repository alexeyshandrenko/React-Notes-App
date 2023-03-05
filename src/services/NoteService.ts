import { idb } from "../db/indexeddb";

import { generateUniqueId, sortByTimestamp } from "../utils/functions";

import { BASE_TITLE, BASE_TEXT } from "../utils/contants";

import { INote } from "../models/Note/INote";

export default class NoteService {
  static getNotes = (setData: Function) => {
    const dbPromise = idb.open("test-db", 2);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("noteData", "readonly");
      const noteData = tx.objectStore("noteData");
      const notes = noteData.getAll();

      notes.onsuccess = () => {
        setData(sortByTimestamp(notes.result));
      };

      notes.onerror = () => {
        console.error("Error occured while loading initial data");
      };

      tx.oncomplete = () => {
        db.close();
      };
    };
  };

  static createNote(setData: Function) {
    const dbPromise = idb.open("test-db", 2);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("noteData", "readwrite");
      const noteData = tx.objectStore("noteData");
      const note = noteData.put({
        id: generateUniqueId(),
        title: BASE_TITLE,
        time: new Date(),
        timestamp: new Date().valueOf(),
        text: BASE_TEXT,
      });
      note.onsuccess = () => {
        tx.oncomplete = () => {
          db.close();
        };
        NoteService.getNotes(setData);
      };
      note.onerror = (event) => {
        console.error(event);
      };
    };
  }

  static updateNote(selectedNote: Partial<INote>, setData: Function) {
    const dbPromise = idb.open("test-db", 2);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("noteData", "readwrite");
      const noteData = tx.objectStore("noteData");
      const note = noteData.put({
        id: selectedNote.id,
        title: selectedNote.title,
        time: new Date(),
        timestamp: new Date().valueOf(),
        text: selectedNote.text,
      });
      note.onsuccess = () => {
        tx.oncomplete = () => {
          db.close();
        };
        NoteService.getNotes(setData);
      };
      note.onerror = (event) => {
        console.error(event);
      };
    };
  }

  static deleteNoteById(setData: Function, id: string) {
    const dbPromise = idb.open("test-db", 2);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("noteData", "readwrite");
      const noteData = tx.objectStore("noteData");
      const deletedNote = noteData.delete(id);

      deletedNote.onsuccess = () => {
        NoteService.getNotes(setData);
      };

      deletedNote.onerror = () => {
        console.error("Error occured while loading initial data");
      };

      tx.oncomplete = () => {
        db.close();
      };
    };
  }
}
