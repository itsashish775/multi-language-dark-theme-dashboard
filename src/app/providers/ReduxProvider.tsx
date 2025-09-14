"use client";

import { store } from "@/ReduxStore/store/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
