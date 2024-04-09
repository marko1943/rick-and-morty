import styles from "./Action.module.scss";

const Action = ({ takeAction }: { takeAction: () => void }) => {
  return (
    // shouldn't be a <td> but oh well
    <td className={styles.Action} onClick={takeAction}>
      View
    </td>
  );
};

export { Action };
