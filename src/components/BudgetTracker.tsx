import {Fragment} from "react";
import CantidadesDisplay from "./CantidadesDisplay.tsx";
import {useBudget} from "../hooks/useBudget.ts";
import GastoModal from "./GastoModal.tsx";

const BudgetTracker = () => {
    const {state, dispatch} = useBudget();

    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center">
                    <img src="/grafico.jpg" alt="Imagen de grafico"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <button
                        type="button"
                        className="border p-2 w-full rounded-lg font-bold text-white bg-orange-500 hover:bg-orange-600"
                        onClick={() => {
                            dispatch({type: "resetBudget"});
                        }}
                    >Reiniciar App</button>

                    <CantidadesDisplay
                        label="Presupuesto"
                        cantidad={state.budget}
                    />
                    <CantidadesDisplay
                        label="Disponible"
                        cantidad={200}
                    />
                    <CantidadesDisplay
                        label="Gastado"
                        cantidad={100}
                    />
                </div>
            </div>
        </Fragment>
    );
}
export default BudgetTracker;