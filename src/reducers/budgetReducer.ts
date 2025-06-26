import type {GastoStorage} from "../types";

export type BudgetActions =
    { type: "addBugget", payload: { budget: number } } |
    { type: "showModal" } |
    { type: "addGasto", payload: {gasto: GastoStorage}} |
    { type: "resetBudget" }

export type BudgetState = {
    budget: number
    modal: boolean
    gastos: GastoStorage[]
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    gastos: []
}

export const budgetReducer = (
    state: BudgetState = initialState,
    actions: BudgetActions
) => {
    //Definicion de presupuesto
    if (actions.type === "addBugget") {
        return {
            ...state,
            budget: +actions.payload.budget
        }
    }

    //Display de modal
    if (actions.type === "showModal"){
        return {
            ...state,
            modal: !state.modal
        }
    }

    //Almacenamiento de gastos
    if (actions.type === "addGasto") {
        return {
            ...state,
            gastos : [...state.gastos, actions.payload.gasto]
        }
    }

    //Reinicio de presupuesto
    if (actions.type === "resetBudget") {
        return state.budget = 0
    }
    return state;
}