export type ITab = {
  id: string;
  name: string;
  active: boolean;
};

export const TabsEnum: ITab[] = [
  { id: "1", name: "Characters", active: true },
  { id: "2", name: "Locations", active: false },
  { id: "3", name: "Episodes", active: false },
];
