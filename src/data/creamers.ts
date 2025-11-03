// src/data/creamers.ts
export interface CreamerType {
  id: string;
  name: string;
  color: string;
}

const creamers: CreamerType[] = [
  {
    id: "c1",
    name: "No Cream",
    color: "transparent",
  },
  {
    id: "c2",
    name: "Milk",
    color: "AliceBlue",
  },
  {
    id: "c3",
    name: "Cream",
    color: "#F5F5DC",
  },
  {
    id: "c4",
    name: "Half & Half",
    color: "#FFFACD",
  },
];

export default creamers;
