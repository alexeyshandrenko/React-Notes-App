import styles from "./styles/modal.module.scss";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

interface ModalWindowProps {
  open: boolean;
  setOpen: Function;
  handleDelete: Function;
}

const ModalWindow = ({ open, setOpen, handleDelete }: ModalWindowProps) => {
  const submitModal = () => {
    handleDelete();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={styles.dialog}
      PaperProps={{
        style: {
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      <DialogTitle className={styles.dialog__title}>
        Удалить данную запись?
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="dialog-description"
          className={styles.dialog__description}
        >
          Вы уверены, что хотите удалить данную запись?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className={styles.dialog__button}
          onClick={() => setOpen(false)}
        >
          Отмена
        </Button>
        <Button className={styles.dialog__button} onClick={submitModal}>
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
