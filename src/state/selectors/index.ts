import { selector } from "recoil";
import { filtroEventos, listaEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroEventos);
    const listaTodosEventos = get(listaEventosState);
    const eventos = listaTodosEventos.filter((evento) => {
      if (!filtro.data) return true;
      const mesmoDia =
        filtro.data.toISOString().slice(0, 10) ===
        evento.inicio.toISOString().slice(0, 10);
      return mesmoDia;
    });

    return eventos;
  },
});
