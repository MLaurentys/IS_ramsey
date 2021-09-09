import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

import { Graph6State, PayloadGraph6UpdateInput } from "../../types/types";
import initialState from "./initial_state";

interface Graph6ReducerMap {
  [key: string]: Reducer<Graph6State, PayloadAction<any>>;
}

function HandleInputText(
  state: Graph6State,
  action: PayloadAction<PayloadGraph6UpdateInput>
): Graph6State {
  return {
    ...state,
    inputText: action.payload.value,
  };
}

const handlers: Graph6ReducerMap = Object.seal({
  input: HandleInputText,
});

export function Graph6Reducer(
  state: Graph6State = initialState,
  action: PayloadAction
): Graph6State {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "graph6") return state;
  return handlers[splitAction[1]](state, action);
}
