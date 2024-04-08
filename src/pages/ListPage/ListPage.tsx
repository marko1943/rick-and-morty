import { useState } from "react";
import { TabsView } from "../../containers/TabsView/TabsView";
import { Field, ITab, TabsEnum } from "../../types";
import styles from "./ListPage.module.scss";
import { FieldsView } from "../../containers/FieldsView/FieldsView";
import { mockData } from "../../mocks";

const ListPage = () => {
  const [tabs, setTabs] = useState<Array<ITab>>(TabsEnum);
  const [fields, setFields] = useState<Field[]>(tabs[0].fields!);

  const handleClick = (id: string) => {
    const newTabs = [...tabs];
    newTabs.map((tab: ITab) => {
      if (tab.id === id) {
        setFields(tab.fields!);
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
      <FieldsView fields={fields} values={mockData.data.characters.results} />
    </div>
  );
};

export { ListPage };
