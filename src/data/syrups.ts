// src/data/syrups.ts
export interface SyrupType {
  id: string;
  name: string;
  color: string;
}

const syrups: SyrupType[] = [
  {
    id: "s1",
    name: "No Syrup",
    color: "#c6c6c6",
  },
  {
    id: "s2",
    name: "Vanilla",
    color: "#FFEFD5",
  },
  {
    id: "s3",
    name: "Caramel",
    color: "#DAA520",
  },
  {
    id: "s4",
    name: "Hazelnut",
    color: "#6B4423",
  },
];

export default syrups;
