import { Action } from "@/types/utils";
import { createContext } from "react";

export interface SidenavContextProps {
  visible: boolean;
  dispatch: React.Dispatch<Action<SidenavContextProps>>;
}

export const sideNavDefaultValue = {
  visible: true,
  dispatch: () => {},
}

export const SidenavContext = createContext<SidenavContextProps>(sideNavDefaultValue);
