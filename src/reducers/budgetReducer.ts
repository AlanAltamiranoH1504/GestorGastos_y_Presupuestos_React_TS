export type BudgetActions =
    { type: "addBugget", payload: { budget: number } } |
    { type: "showModal" } |
    { type: "resetBudget" }

export type BudgetState = {
    budget: number
    modal: boolean
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false
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

    //Reinicio de presupuesto
    if (actions.type === "resetBudget") {
        return state.budget = 0
    }
    return state;
}