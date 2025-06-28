import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);
  return (evento: IEvento) => {
    return setListaEventos((listaAntiga) => {
      const indice = listaAntiga.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAntiga.slice(0, indice),
        evento,
        ...listaAntiga.slice(indice + 1),
      ];
    });
  };
};

export default useAtualizarEvento;
