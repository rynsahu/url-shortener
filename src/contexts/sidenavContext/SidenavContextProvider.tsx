import { useReducer } from "react";
import { SidenavContext, SidenavContextProps, sideNavDefaultValue } from ".";
import { Action } from "@/types/utils";
import { SIDENAV_ACTION } from "@/constants/reducerActions";

const reducer = (state: SidenavContextProps, action: Action<SidenavContextProps>) => {
  switch (action.type) {
    case SIDENAV_ACTION.TOGGLE: {
      return {
        ...state,
        visible: !state.visible
      }
    }
    default:
      return state;
  }
}

const SidenavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, sideNavDefaultValue);

  return(
    <SidenavContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SidenavContext.Provider>
  )
}

export default SidenavContextProvider;
