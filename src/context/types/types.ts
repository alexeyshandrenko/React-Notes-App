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
}
