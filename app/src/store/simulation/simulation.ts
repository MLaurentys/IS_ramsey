import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import treeSimulation from "../../data-files/tree_simulation.js";
import farysSimulation from "../../data-files/farys_simulation.json";
import testSimulation from "../../data-files/test_simulation.js";
import { startSimulation } from "./start";
import { abortSimulation } from "./abort";

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
    state = abortSimulation(state);
    return startSimulation(state, payload);
  },
  select: (state: any, payload: any) => {
    if (state.selected === payload.value) return state;
    return { ...state, selected: payload.value };
  },
  run: (state: any, payload: any) => {
    setTimeout(() => state.simulation[0]());
    const newSimu = state.simulation.slice(1);
    return { ...state, simulation: newSimu };
  },
  setStepInfo: (state, payload) => {
    return {
      ...state,
      stepTitle: payload.payload.stepTitle,
      stepDescription: payload.payload.stepDescription,
    };
  },
  runNextStep: (state: any, payload: any) => {
    if (state.simulation.length === 0) return state;
    state.simulation[0]();
    const newSimu = state.simulation.slice(1);
    return { ...state, simulation: newSimu };
  },
});

export function SimulationReducer(
  state: any = {
    simulations: [treeSimulation], // testSimulation, farysSimulation],
    selected: 0,
    simulation: [],
    stepTimeoutId: null,
    stepTitle: "",
    stepDescription: "",
  },
  action: PayloadAction
): any {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "simu") return state;
  return handlers[splitAction[1]](state, action);
}
