import { INote } from "../../models/Note/INote";

export interface NotesDataContextProps {
  setAllNotesData: React.Dispatch<React.SetStateAction<INote[]>>;
  allNotesData: INote[];
  selectedNote: INote;
  setSelectedNote: React.Dispatch<React.SetStateAction<INote>>;
}
