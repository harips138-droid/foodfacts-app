import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./savedSlice";

export const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});

// localStorage save
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(
      "foodfacts-saved",
      JSON.stringify(state.saved.items)
    );
  } catch {}
});