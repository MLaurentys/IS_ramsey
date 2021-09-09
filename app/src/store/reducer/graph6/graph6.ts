import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

import {
  Graph6State,
  PayloadGraph6UpdateDisplayed,
} from "../../../types/types";
import initialState from "./initial_state";

interface Graph6ReducerMap {
  [key: string]: Reducer<Graph6State, PayloadAction<any>>;
}

function UpdateDisplayed(
  state: Graph6State,
  payload: PayloadAction<PayloadGraph6UpdateDisplayed>
): Graph6State {
  console.log(payload);
  return state;
}

const handlers: Graph6ReducerMap = Object.seal({});

export function Graph6Reducer(
  state: Graph6State = initialState,
  action: PayloadAction
): Graph6State {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "graph6") return state;
  return handlers[splitAction[1]](state, action);
}
