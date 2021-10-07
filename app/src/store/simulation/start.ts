/*
 *
 */

import store from "../store";

function renderStep(stepInfo) {
  store.dispatch<any>({
    type: "cyto/renderStep",
    payload: {
      graph: stepInfo.graph,
      colors: stepInfo.colors,
    },
  });
}

function updateUIInfo(stepInfo) {
  store.dispatch<any>({
    type: "simu/setStepInfo",
    payload: {
      stepTitle: stepInfo.title,
      stepDescription: stepInfo.description,
    },
  });
}

function prepareSimulation(simuSteps) {
  const simulation = simuSteps.map((step) => () => {
    setTimeout(() => renderStep(step));
    setTimeout(() => updateUIInfo(step));
    setTimeout(
      () => store.dispatch({ type: "simu/runNextStep", payload: null }),
      step.duration
    );
  });
  return simulation;
}

export function startSimulation(state: any, payload: any) {
  const simulation = prepareSimulation(state.simulations[state.selected].steps);
  setTimeout(() => store.dispatch({ type: "simu/runNextStep", payload: null }));
  return { ...state, simulation };
}
