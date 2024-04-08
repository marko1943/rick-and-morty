export type Field = {
  id: string;
  name: string;
  // toDO maybe we dont need
  type: "Characters" | "Locations" | "Episodes";
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
      { id: "1", name: "name", type: "Characters" },
      { id: "2", name: "species", type: "Characters" },
      { id: "3", name: "type", type: "Characters" },
      { id: "4", name: "status", type: "Characters" },
      { id: "5", name: "gender", type: "Characters" },
      { id: "6", name: "action", type: "Characters" },
    ],
  },
  {
    id: "2",
    name: "Locations",
    active: false,
    fields: [
      { id: "1", name: "name", type: "Locations" },
      { id: "2", name: "type", type: "Locations" },
      { id: "3", name: "dimension", type: "Locations" },
      { id: "4", name: "action", type: "Locations" },
    ],
  },
  {
    id: "3",
    name: "Episodes",
    active: false,
    fields: [
      { id: "1", name: "name", type: "Episodes" },
      { id: "2", name: "episode", type: "Episodes" },
      { id: "3", name: "action", type: "Episodes" },
    ],
  },
];
