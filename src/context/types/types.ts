import { INote } from "../../models/Note/INote";

export interface NotesDataContextProps {
  setAllNotesData: React.Dispatch<React.SetStateAction<INote[]>>;
  allNotesData: INote[];
  findedNotesData: INote[];
  setFindedNotesData: React.Dispatch<React.SetStateAction<INote[]>>;
  selectedNote: INote;
  setSelectedNote: React.Dispatch<React.SetStateAction<INote>>;
  activateSearch: boolean;
  setActivateSearch: React.Dispatch<React.SetStateAction<boolean>>;
  activeStyleText: boolean;
  setActiveStyleText: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NotesTableDataContextProps {
  setAllNotesData: React.Dispatch<React.SetStateAction<INote[]>>;
  allNotesData: INote[];
  findedNotesData: INote[];
  setFindedNotesData: React.Dispatch<React.SetStateAction<INote[]>>;
  selectedNote: INote;
  setSelectedNote: React.Dispatch<React.SetStateAction<INote>>;
  activateSearch: boolean;
  setActivateSearch: React.Dispatch<React.SetStateAction<boolean>>;
  editDataModal: boolean;
  setEditDataModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeStyleText: boolean;
  setActiveStyleText: React.Dispatch<React.SetStateAction<boolean>>;
}
