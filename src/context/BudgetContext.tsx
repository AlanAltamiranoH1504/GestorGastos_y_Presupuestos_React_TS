import {useState, createContext, useReducer} from "react";
import {type BudgetActions, budgetReducer, type BudgetState, initialState} from "../reducers/budgetReducer.ts";
import * as React from "react";

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children: React.ReactNode
}

//Definicion de context
export const BudgetContext = createContext<BudgetContextProps>(null!);

const BudgetProvider = ({children}: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}
export default BudgetProvider;