import BudgetForm from "./components/BudgetForm.tsx";
import {useBudget} from "./hooks/useBudget.ts";
import {Fragment} from "react";
import BudgetTracker from "./components/BudgetTracker.tsx";
import GastoModal from "./components/GastoModal.tsx";

function App() {
    const {state} = useBudget();
    return (
        <>
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4xl text-white">
                    Planifador de Gastos
                </h1>
            </header>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
                {state.budget ? (
                    <Fragment>
                        <BudgetTracker/>
                    </Fragment>
                ): (
                    <Fragment>
                        <BudgetForm/>
                    </Fragment>
                )}
            </div>
            {/*Ventana modal de gastos*/}
            {state.budget ? (
                <main className="max-w-3xl mx-auto py-10">
                    <GastoModal/>
                </main>
            ):(
                <Fragment></Fragment>
            )}
        </>
    )
}

export default App
