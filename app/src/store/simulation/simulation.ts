import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import treeSimulation from "../../data-files/tree_simulation.json";
import farysSimulation from "../../data-files/farys_simulation.json";

interface SimulationReducerMap {
  [key: string]: any;
}

const handlers: SimulationReducerMap = Object.seal({
  add: (state: any, payload: any) => {
    return {
      ...state,
      simulations: [...state.simulations, JSON.parse(payload.json)],
    };
  },
  start: (state: any, payload: any) => {
    return state;
  },
  select: (state: any, payload: any) => {
    if (state.selected === payload) return state;
    return { ...state, selected: payload.value };
  },
});

export function SimulationReducer(
  state: any = {
    simulations: [treeSimulation, farysSimulation],
    selected: 0,
  },
  action: PayloadAction
): any {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "simu") return state;
  return handlers[splitAction[1]](state, action);
}
