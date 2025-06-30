import BudgetForm from "./components/BudgetForm.tsx";
import {useBudget} from "./hooks/useBudget.ts";
import {Fragment, useEffect} from "react";
import BudgetTracker from "./components/BudgetTracker.tsx";
import GastoModal from "./components/GastoModal.tsx";
import GastoDetalles from "./components/GastoDetalles.tsx";

function App() {
    const {state} = useBudget();

    useEffect(() => {
        localStorage.setItem("budget", state.budget.toString());
        localStorage.setItem("gastos", JSON.stringify(state.gastos));
    },[state])
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
                    {state.gastos.length > 0 ? (
                        state.gastos.map((gasto) => {
                            return (
                                <GastoDetalles gasto={gasto} key={gasto.id}/>
                            )
                        })
                    ):(
                        <Fragment>
                            <div className="bg-orange-600 text-center font-bold uppercase text-white rounded-lg p-2">No tienes gastos registrados.</div>
                        </Fragment>
                    )}
                    <GastoModal/>
                </main>
            ):(
                <Fragment></Fragment>
            )}
        </>
    )
}

export default App
