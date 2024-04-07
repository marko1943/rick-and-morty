import { ITab } from "../../types";
import styles from "./Tab.module.scss";
type Props = ITab & {
  setTab: (id: string) => void;
};

const Tab = ({ id, name, active, setTab }: Props) => {
  return (
    <div
      className={active ? `${styles.Tab} ${styles.Active}` : `${styles.Tab}`}
      onClick={() => setTab(id)}
    >
      <h2>{name}</h2>
    </div>
  );
};

export { Tab };
