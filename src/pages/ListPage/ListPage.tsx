import { useCallback, useEffect, useState } from "react";
import { TabsView } from "../../containers/TabsView/TabsView";
import { useLazyQuery } from "@apollo/client";
import { Field, ITab, TabsEnum } from "../../types";
import { FieldsView } from "../../containers/FieldsView/FieldsView";
import { GET_CHARACTERS } from "../../graphql/queries/Characters.query";
import { GET_EPISODES } from "../../graphql/queries/Episodes.query";
import { GET_LOCATIONS } from "../../graphql/queries/Locations.query";

import styles from "./ListPage.module.scss";
import { Pagination } from "../../components/Pagination/Pagination";

const ListPage = () => {
  const [tabs, setTabs] = useState<Array<ITab>>(TabsEnum);
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
  const [fields, setFields] = useState<Field[]>(tabs[0].fields!);
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const [getCharacters, { loading, error }] = useLazyQuery(GET_CHARACTERS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      if (activeTab.name === "Characters") {
        setPages(res.characters.info.pages);
        setData(res.characters.results);
      }
    },
  });

  const [getLocations] = useLazyQuery(GET_LOCATIONS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      if (activeTab.name === "Locations") {
        setPages(res.locations.info.pages);
        setData(res.locations.results);
      }
    },
  });

  const [getEpisodes] = useLazyQuery(GET_EPISODES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (res) => {
      if (activeTab.name === "Episodes") {
        setPages(res.episodes.info.pages);
        setData(res.episodes.results);
      }
    },
  });

  // set only the first tab to active
  const resetTabs = () => {
    const newTabs = [...tabs];
    // could be done with a map, but this is ok for now
    newTabs[0].active = true;
    newTabs[1].active = false;
    newTabs[2].active = false;

    setTabs(newTabs);
  };

  // only fire on first render
  // in ideal case we'd want to return to whichever tab was active and whichever page
  // but again it's too much work for this project
  useEffect(() => {
    getCharacters();
    resetTabs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTabsClick = useCallback(
    (id: string) => {
      setPage(1);
      const newTabs = [...tabs];
      newTabs.map((tab: ITab) => {
        if (tab.id === id) {
          tab.active = true;
          setFields(tab.fields!);
          setActiveTab(tab);
        } else {
          tab.active = false;
        }
        return tab;
      });
      setTabs(newTabs);
    },
    [tabs]
  );

  useEffect(() => {
    if (activeTab.name === "Episodes") {
      getEpisodes({ variables: { page } });
    } else if (activeTab.name === "Locations") {
      getLocations({ variables: { page } });
    } else {
      getCharacters({ variables: { page } });
    }
  }, [activeTab.name, getCharacters, getEpisodes, getLocations, page]);

  const onNumberClick = (num: number) => {
    setPage(num);
    if (activeTab.name === "Characters") {
      getCharacters({ variables: { page: num } });
    } else if (activeTab.name === "Episodes") {
      getEpisodes({ variables: { page: num } });
    } else {
      getLocations({ variables: { page: num } });
    }
  };

  return (
    <div className={styles.ListPage}>
      <TabsView handleClick={onTabsClick} tabs={tabs} />

      <FieldsView
        loading={loading}
        error={error}
        fields={fields}
        values={data}
      />
      <Pagination
        currentPage={page}
        selectNumber={onNumberClick}
        pages={pages}
      />
    </div>
  );
};

export { ListPage };
