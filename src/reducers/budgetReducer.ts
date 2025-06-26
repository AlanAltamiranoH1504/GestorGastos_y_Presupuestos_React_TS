export type BudgetActions =
    {type: "addBugget", payload: {budget: number}}

export type BudgetState = {
    budget: number
}

export const initialState: BudgetState = {
    budget: 0
}

export const budgetReducer = (
    state: BudgetState = initialState,
    actions: BudgetActions
) => {
    if (actions.type === "addBugget"){
        console.log("Agregando budget");
        return {
            ...state,
            budget: +actions.payload.budget
        }
    }
    return state;
}