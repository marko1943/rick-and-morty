import { useState } from "react";
import { TabsView } from "../../containers/TabsView/TabsView";
import { ITab, TabsEnum } from "../../types";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  const [tabs, setTabs] = useState<Array<ITab>>(TabsEnum);

  const handleClick = (id: string) => {
    const newTabs = [...tabs];
    newTabs.map((tab: ITab) => {
      if (tab.id === id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    });
    setTabs(newTabs);
  };

  return (
    <div className={styles.ListPage}>
      <TabsView handleClick={handleClick} tabs={tabs} />
    </div>
  );
};

export { ListPage };
