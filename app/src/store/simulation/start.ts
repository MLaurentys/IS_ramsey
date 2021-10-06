/*
 *
 */

import store from "../store";

function renderStep(stepInfo) {
  console.log("in step");
  store.dispatch<any>({
    type: "cyto/renderStep",
    payload: {
      graph: stepInfo.graph,
      colors: stepInfo.colors,
      title: stepInfo.title,
      description: stepInfo.description,
    },
  });
}

function prepareSimulation(simuSteps) {
  const simulation = simuSteps.map((step) => () => {
    setTimeout(() => renderStep(step));
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
