import styles from "./styles/sidebar.module.scss";

import LeftTopBar from "../TopBar/LeftTopBar/LeftTopBar";
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
