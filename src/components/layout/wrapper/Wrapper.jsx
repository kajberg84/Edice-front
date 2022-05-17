import * as React from "react";

// styles
import styles from "./Wrapper.module.scss";

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
