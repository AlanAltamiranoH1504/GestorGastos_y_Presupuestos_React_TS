import {useContext} from "react";
import {BudgetContext} from "../context/BudgetContext.tsx";

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if(!context) {
        throw new Error("Error en la busqueda de de context de la aplicación.")
    }
    return context;
}