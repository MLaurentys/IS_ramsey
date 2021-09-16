import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

interface MenuReducerMap {
  [key: string]: any;
}

const handlers: MenuReducerMap = Object.seal({
  select: (state: any, payload: any) => {
    if (state.tabSelected === payload.value) return state;
    return { ...state, tabSelected: payload.value };
  },
});

export function MenuReducer(
  state: any = { tabSelected: "sim" },
  action: PayloadAction
): any {
  const splitAction = action.type.split("/");
  if (splitAction[0] !== "menu") return state;
  return handlers[splitAction[1]](state, action);
}
