import { useState, FC, InputHTMLAttributes } from "react";

import styles from "./styles/input.module.scss";

import SearchIcon from "@mui/icons-material/Search";

interface Searchprops extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
}

const Search: FC<Partial<Searchprops>> = ({
  type,
  placeholder,
  name,
  ...rest
}) => {
  return (
    <div className={styles.input}>
      <SearchIcon className={styles.input__icon} />
      <input type={type} placeholder={placeholder} name={name} {...rest} />
    </div>
  );
};

export default Search;
