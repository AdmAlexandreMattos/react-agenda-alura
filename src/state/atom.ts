import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./selectors";

export const listaEventosState = atom<IEvento[]>({
  key: "listaEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2025-07-01T09:00"),
      fim: new Date("2025-07-01T11:00"),
      completo: false,
      id: 164234274711,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2025-07-03T12:00"),
      fim: new Date("2025-07-03T14:00"),
      completo: false,
      id: 164234295912,
    },
    {
      descricao: "Estudar JavaScript",
      inicio: new Date("2025-07-10T12:00"),
      fim: new Date("2025-07-10T14:00"),
      completo: false,
      id: 164234295913,
    },
    {
      descricao: "Estudar TypeScript",
      inicio: new Date("2025-07-11T12:00"),
      fim: new Date("2025-07-11T14:00"),
      completo: false,
      id: 164234295914,
    },
  ],
  // default: eventosAsync,
});

export const filtroEventos = atom<IFiltroEventos>({
  key: "filtroEventos",
  default: {
    data: new Date(),
  },
});
