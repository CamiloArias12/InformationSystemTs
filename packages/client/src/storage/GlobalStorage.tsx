import { ReactNode, createContext, useReducer } from "react";

export type GlobalStorageProps = {
   children: ReactNode
};

export type GlobalStorageStateProps = {
   id: number;
};

export type GlobalStorageContextProps = {
   state: GlobalStorageStateProps;
   dispatch: React.Dispatch<{ state: GlobalStorageStateProps, action: string }>;
};
export const GlobalStorageContext = createContext<GlobalStorageContextProps | {}>({});

// TODO: Fix inconsistenci with parameters
function reducer(_: any, newState: any): GlobalStorageStateProps {
   return {...newState?.state};
}

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
   const [globalState, dispatch] = useReducer(reducer, { id: 0 } as GlobalStorageStateProps);
   return (
      <GlobalStorageContext.Provider value={{ state: globalState, dispatch: dispatch }}>
         {children}
      </GlobalStorageContext.Provider>
   );
}

