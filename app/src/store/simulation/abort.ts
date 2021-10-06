export function abortSimulation(state) {
  if (state.stepTimeoutId !== null) clearTimeout(state.stepTimeoutId);
  return { ...state, stepTimeoutId: null };
}
