import styles from "./styles/content.module.scss";

import RightTopBar from "../TopBar/RightTopBar/RightTopBar";
import TextArea from "../TextArea/TextArea";

const Content = () => {
  return (
    <main className={styles.content}>
      <RightTopBar />
      <TextArea />
    </main>
  );
};

export default Content;
