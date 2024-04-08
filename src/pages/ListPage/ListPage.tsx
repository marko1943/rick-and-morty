import { useCallback, useEffect, useState } from "react";
import { TabsView } from "../../containers/TabsView/TabsView";
import { useLazyQuery } from "@apollo/client";
import { Field, ITab, TabsEnum } from "../../types";
import { FieldsView } from "../../containers/FieldsView/FieldsView";
import { GET_CHARACTERS } from "../../graphql/queries/Characters.query";
import { GET_EPISODES } from "../../graphql/queries/Episodes.query";
import { GET_LOCATIONS } from "../../graphql/queries/Locations.query";

import styles from "./ListPage.module.scss";

const ListPage = () => {
  const [tabs, setTabs] = useState<Array<ITab>>(TabsEnum);
  const [fields, setFields] = useState<Field[]>(tabs[0].fields!);
  const [data, setData] = useState<Record<string, string>[]>([]);

  const [getCharacters, { loading, error }] = useLazyQuery(GET_CHARACTERS, {
    variables: { page: 1 },
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      setData(res.characters.results);
    },
  });

  const [getLocations] = useLazyQuery(GET_LOCATIONS, {
    variables: { page: 1 },
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      setData(res.locations.results);
    },
  });

  const [getEpisodes] = useLazyQuery(GET_EPISODES, {
    variables: { page: 1 },
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      setData(res.episodes.results);
    },
  });

  // only fire on first render
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(
    (id: string) => {
      const newTabs = [...tabs];
      newTabs.map((tab: ITab) => {
        if (tab.id === id) {
          setFields(tab.fields!);
          tab.active = true;
          if (tab.name === "Episodes") {
            getEpisodes();
          } else if (tab.name === "Locations") {
            getLocations();
          } else {
            getCharacters();
          }
        } else {
          tab.active = false;
        }
        return tab;
      });
      setTabs(newTabs);
    },
    [getCharacters, getEpisodes, getLocations, tabs]
  );

  return (
    <div className={styles.ListPage}>
      <TabsView handleClick={handleClick} tabs={tabs} />

      <FieldsView
        loading={loading}
        error={error}
        fields={fields}
        values={data}
      />
    </div>
  );
};

export { ListPage };
