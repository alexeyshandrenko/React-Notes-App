import styles from "./styles/title.module.scss";

import { Typography } from "@mui/material";

const Title = () => {
  return (
    <>
      <Typography className={styles.title} variant="h5" gutterBottom>
        СЕГОДНЯ
      </Typography>
    </>
  );
};

export default Title;
