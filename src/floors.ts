import type { FloorId, Room } from "./types";

export interface FloorRoom extends Required<Pick<Room, "id">> { name: string; x: number; y: number; width: number; height: number; sensor?: boolean; }
export interface Floor { id: FloorId; name: string; rooms: FloorRoom[]; }

export const FLOORS: Record<FloorId, Floor> = {
  ground: { id: "ground", name: "Parter", rooms: [
    { id: "office", name: "Biuro", x: 2, y: 2, width: 30, height: 31 }, { id: "hall", name: "Hall", x: 2, y: 34, width: 30, height: 25 },
    { id: "stairs", name: "Schody", x: 33, y: 2, width: 22, height: 28, sensor: false }, { id: "corridor", name: "Korytarz I", x: 33, y: 31, width: 22, height: 28 },
    { id: "living", name: "Salon", x: 56, y: 2, width: 42, height: 57 }, { id: "kitchen", name: "Kuchnia", x: 2, y: 60, width: 96, height: 38 }
  ]},
  upper: { id: "upper", name: "Piętro", rooms: [
    { id: "bathroom", name: "Łazienka", x: 2, y: 2, width: 30, height: 37 }, { id: "stairs", name: "Schody", x: 33, y: 2, width: 22, height: 27, sensor: false },
    { id: "corridor", name: "Korytarz II", x: 33, y: 30, width: 22, height: 28, sensor: false }, { id: "bedroom_1", name: "Sypialnia I", x: 56, y: 2, width: 42, height: 33 },
    { id: "bedroom_2", name: "Sypialnia II", x: 56, y: 36, width: 42, height: 31 }, { id: "bedroom_3", name: "Sypialnia III", x: 2, y: 59, width: 52, height: 39 }, { id: "wardrobe", name: "Garderoba", x: 55, y: 68, width: 43, height: 30 }
  ]},
  basement: { id: "basement", name: "Piwnica", rooms: [
    { id: "utility", name: "Pom. gospodarcze", x: 2, y: 2, width: 28, height: 30 }, { id: "bathroom", name: "Łazienka", x: 2, y: 33, width: 28, height: 26 },
    { id: "stairs", name: "Schody", x: 31, y: 2, width: 25, height: 27, sensor: false }, { id: "corridor", name: "Korytarz", x: 31, y: 30, width: 25, height: 29, sensor: false }, { id: "gym", name: "Siłownia", x: 57, y: 2, width: 41, height: 57 }, { id: "garage", name: "Garaż", x: 2, y: 60, width: 96, height: 38 }
  ]}
};
