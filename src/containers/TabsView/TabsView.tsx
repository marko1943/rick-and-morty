import { Tab } from "../../components/Tab/Tab";
import { ITab } from "../../types";
import styles from "./TabsView.module.scss";

const TabsView = ({
  tabs,
  handleClick,
}: {
  tabs: Array<ITab>;
  handleClick: (id: string) => void;
}) => {
  return (
    <div className={styles.TabsView}>
      {[...tabs].map((tab: ITab) => (
        <Tab
          setTab={handleClick}
          key={tab.id}
          id={tab.id}
          name={tab.name}
          active={tab.active}
        />
      ))}
    </div>
  );
};

export { TabsView };
