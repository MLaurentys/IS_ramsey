import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import treeSimulation from "../../data-files/tree_simulation.json";

interface SimulationReducerMap {
  [key: string]: any;
}

const handlers: SimulationReducerMap = Object.seal({
  add: (state: any, payload: any) => {
    return [...state, JSON.parse(payload.json)];
  },
});

export function SimulationReducer(
  state: any = [treeSimulation],
  action: PayloadAction
): any {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "simu") return state;
  return handlers[splitAction[1]](state, action);
}
