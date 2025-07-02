import React from "react";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import useAtualizarEvento from "../../state/hooks/useAtualizarEvento";
import useListaEventos from "../../state/hooks/useListaEventos";

interface IKalendEvento {
  id?: string;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useListaEventos();
  const atualizarEvento = useAtualizarEvento();

  eventos.forEach((evento) => {
    const chave = evento.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: String(evento.id), // Garante que o id seja string
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: "blue",
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    kalendEventoInalterado: CalendarEvent,
    kalendEventoAtualizado: CalendarEvent
  ) => {
    const evento = eventos.find(
      (evento) => String(evento.id) === kalendEventoAtualizado.id
    );
    if (evento) {
      const eventoAtualizado = {
        ...evento,
        inicio: new Date(kalendEventoAtualizado.startAt),
        fim: new Date(kalendEventoAtualizado.endAt),
      };
      atualizarEvento(eventoAtualizado);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        key={eventos.map((e) => e.id).join("-")} // força re-render ao mudar eventos
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendario;
