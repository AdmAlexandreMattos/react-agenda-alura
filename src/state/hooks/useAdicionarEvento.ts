import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";
import { obterID } from "../../util";

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);
  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        "Eventos não podem ser cadastrados com data menor do que a atual"
      );
    }
    evento.id = obterID();

    return setListaEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
