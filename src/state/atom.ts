import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./selectors";

export const listaEventosState = atom<IEvento[]>({
  key: "listaEventosState",
  default: eventosAsync,
});

export const filtroEventos = atom<IFiltroEventos>({
  key: "filtroEventos",
  default: {
    data: new Date(),
  },
});
