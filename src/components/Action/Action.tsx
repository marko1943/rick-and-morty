import styles from "./Action.module.scss";

const Action = ({ takeAction }: { takeAction: () => void }) => {
  return (
    <td className={styles.Action} onClick={takeAction}>
      View
    </td>
  );
};

export { Action };
