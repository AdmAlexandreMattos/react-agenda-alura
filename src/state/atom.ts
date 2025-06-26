import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaEventosState = atom<IEvento[]>({
  key: "listaEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2025-06-25T12:00"),
      fim: new Date("2025-06-25T14:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2025-06-25T09:00"),
      fim: new Date("2025-06-25T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
