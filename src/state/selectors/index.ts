import { selector } from "recoil";
import { filtroEventos, listaEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

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

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async ({ get }) => {
    const respostaHttp = await fetch("http://localhost:8080/eventos");
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map((evento) => {
      return {
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
      };
    });
  },
});
