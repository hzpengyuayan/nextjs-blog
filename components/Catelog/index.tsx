import type { ReactElement } from 'react'
import styles from "./index.module.scss";

interface Props {
  title: String;
  children: ReactElement;
}

export default function Catelog(props: Props) {
  return (
    <div className={styles.catelog}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.body}>
        <ul className={styles.list}>{props.children}</ul>
      </div>
    </div>
  );
}
