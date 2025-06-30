import type {GastoStorage, GastoTemporal} from "../types";

export type BudgetActions =
    { type: "addBugget", payload: { budget: number } } |
    { type: "showModal" } |
    { type: "addGasto", payload: { gasto: GastoStorage } } |
    { type: "removeGasto", payload: { gasto: GastoStorage } } |
    { type: "findGastoById", payload: { id: GastoStorage["id"] } } |
    { type: "updateGasto", payload: { gasto: GastoStorage } } |
    { type: "resetBudget" }

export type BudgetState = {
    budget: number
    modal: boolean
    gastos: GastoStorage[]
    editingId: GastoStorage["id"]
}

const initialBudget = () => {
    const localStorageBudget = localStorage.getItem("budget");
    return localStorageBudget ? +localStorageBudget : 0;
}

const localStorageGastos = (): GastoStorage[] => {
    const localStorageGastos = localStorage.getItem("gastos");
    return localStorageGastos ? JSON.parse(localStorageGastos) : [];
}

export const initialState: BudgetState = {
    budget: initialBudget(),
    modal: false,
    gastos: localStorageGastos(),
    editingId: ""
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
    if (actions.type === "showModal") {
        return {
            ...state,
            modal: !state.modal,
            editingId: ""
        }
    }

    //Almacenamiento de gastos
    if (actions.type === "addGasto") {
        return {
            ...state,
            gastos: [...state.gastos, actions.payload.gasto]
        }
    }

    //Eliminacion de gasto
    if (actions.type === "removeGasto") {
        const newGastos = state.gastos.filter((gasto) => {
            return gasto.id !== actions.payload.gasto.id
        });
        return {
            ...state,
            gastos: newGastos
        }
    }

    //Actualizacion de gasto
    if (actions.type === "updateGasto") {
        return {
            ...state,
            gastos: state.gastos.map(gasto => gasto.id === state.editingId ? actions.payload.gasto : gasto),
            editingId: ""
        }
    }

    //findGastoById
    if (actions.type === "findGastoById") {
        return {
            ...state,
            editingId: actions.payload.id,
            modal: true
        }
    }

    //Reinicio de presupuesto
    if (actions.type === "resetBudget") {
        return state.budget = 0
    }
    return state;
}