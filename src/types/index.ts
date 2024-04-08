// TODO
// Tab names could be moved to enums, key-pair consts

export type Field = {
  id: string;
  name: string;
};

export type ITab = {
  id: string;
  name: string;
  active: boolean;
  fields?: Field[];
};

export const TabsEnum: ITab[] = [
  {
    id: "1",
    name: "Characters",
    active: true,
    fields: [
      { id: "1", name: "name" },
      { id: "2", name: "species" },
      { id: "3", name: "type" },
      { id: "4", name: "status" },
      { id: "5", name: "gender" },
      { id: "6", name: "action" },
    ],
  },
  {
    id: "2",
    name: "Locations",
    active: false,
    fields: [
      { id: "1", name: "name" },
      { id: "2", name: "type" },
      { id: "3", name: "dimension" },
      { id: "4", name: "action" },
    ],
  },
  {
    id: "3",
    name: "Episodes",
    active: false,
    fields: [
      { id: "1", name: "name" },
      { id: "2", name: "episode" },
      { id: "3", name: "action" },
    ],
  },
];
