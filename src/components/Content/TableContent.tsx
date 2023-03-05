import TableNotes from "../Notes/TableNotes";
import styles from "./styles/table-content.module.scss";

const TableContent = () => {
  return (
    <main className={styles.content}>
      <TableNotes />
    </main>
  );
};

export default TableContent;
