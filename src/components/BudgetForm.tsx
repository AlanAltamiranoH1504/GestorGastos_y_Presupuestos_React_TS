import {useForm} from "react-hook-form";
// import {useState} from "react";
import {toast} from "react-toastify";
import type {PresupuestoInicial} from "../types";

const BudgetForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<PresupuestoInicial>();
    // const [budget, setBudget] = useState(0);

    //Funcion de definicion de state
    function setInformacion(data: PresupuestoInicial) {
        toast.success("Presupuesto asignado correctamente");
        console.log(data)
        // setBudget(+data.budget)
    }

    function mostrarErrores() {
        toast.error("Error en asignacion de presupuesto");
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(setInformacion, mostrarErrores)}
                className="space-y-5">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">Definir
                        Presupuesto</label>
                    <input
                        type="number"
                        className="border p-3 rounded-lg border-gray-200 shadow-md"
                        id="budget"
                        placeholder="Define el presupuesto inicial"
                        {...register("budget",{
                            required: "El presupuesto inicial es obligatorio",
                            pattern: {
                                value: /^[1-9]\d*$/,
                                message: "El presupuesto inicial debe ser mayor a 0"
                            }
                        })}
                    />
                    <div className="text-center text-red-600 font-bold">
                        {errors.budget && String(errors.budget.message)}
                    </div>
                </div>
                <div className="">
                    <input type="submit"
                           className="bg-blue-500 p-2 text-center text-white uppercase font-bold rounded-lg w-full cursor-pointer hover:bg-blue-600"
                           value="Definir Presupuesto"/>
                </div>
            </form>
        </>
    );
}
export default BudgetForm;