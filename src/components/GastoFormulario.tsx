import {Fragment} from "react";
import {useForm} from "react-hook-form";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import {categories} from "../data";
import {v4 as uuidv4} from "uuid";
import type {GastoStorage, GastoTemporal} from "../types";
import {useBudget} from "../hooks/useBudget.ts";
import {toast} from "react-toastify";

const GastoFormulario = () => {
    const {dispatch} = useBudget();
    const {register, handleSubmit, formState: {errors}} = useForm<GastoTemporal>();

    const guardadoGasto = (data: GastoTemporal) => {
        const gastoConId:GastoStorage = {
            ...data,
            id: uuidv4()
        };
        dispatch({type: "addGasto", payload: {gasto: gastoConId}});
        dispatch({type: "showModal"});
        toast.success("Gasto guardado correctamente.");
    }

    return (
        <Fragment>
            <form
                className="space-y-5"
                onSubmit={handleSubmit(guardadoGasto)}
            >
                <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">Nuevo
                    Gasto
                </legend>

                {/*Titulo del gasto*/}
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xl" htmlFor="nombre">Nombre del Gasto:</label>
                    <input
                        type="text"
                        placeholder="Ingresa el nombre del gasto"
                        className="border p-2 border-gray-300 rounded-lg"
                        {...register("nombre", {
                            required: "El nombre del gasto es obligatorio"
                        })}
                    />
                    <div className="text-center text-red-600 font-semibold">
                        <p className="border rounded-md bg-red-200">
                            {errors.nombre && String(errors.nombre.message)}
                        </p>
                    </div>
                </div>

                {/*Monto del gasto*/}
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xl" htmlFor="monto">Monto del Gasto:</label>
                    <input
                        type="number"
                        placeholder="Ingresa el monto del gasto"
                        className="border p-2 border-gray-300 rounded-lg"
                        {...register("monto", {
                            required: "El monto del gasto es obligatorio",
                            pattern: {
                                value: /^[1-9]\d*$/,
                                message: "El monto debe ser mayor a 0"
                            },
                            valueAsNumber: true,
                        })}
                    />
                    <div className="text-center text-red-600 font-semibold">
                        <p className="border rounded-md bg-red-200">
                            {errors.monto && String(errors.monto.message)}
                        </p>
                    </div>
                </div>

                {/*Categoria del gasto*/}
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xl" htmlFor="categoria">Categoria del Gasto:</label>
                    <select
                        className="border p-2 rounded-lg"
                        {...register("categoria", {
                            required: "La categoria es obligatoria",
                        })}
                    >
                        <option value="">--- Selecciona una Categoria ---</option>
                        {categories.map((categoria) => {
                            return (
                                <option key={categoria.id} value={+categoria.id}>{categoria.name}</option>
                            );
                        })}
                    </select>
                    <div className="text-center text-red-600 font-semibold">
                        <p className="border rounded-md bg-red-200">
                            {errors.categoria && String(errors.categoria.message)}
                        </p>
                    </div>
                </div>

                {/*Fecha del gasto*/}
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xl" htmlFor="fecha">Fecha del Gasto:</label>
                    <input
                        type="date"
                        className="border p-2 border-gray-300 rounded-lg"
                        {...register("fecha", {
                            required: "La fecha del gasto es obligatoria"
                        })}
                    />
                    <div className="text-center text-red-600 font-semibold">
                        <p className="border rounded-md bg-red-200">
                            {errors.fecha && String(errors.fecha.message)}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <input type="submit" value="Guardar Gasto"
                           className="border p-2 rounded-lg font-bold uppercase bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"/>
                </div>
            </form>
        </Fragment>
    );
}
export default GastoFormulario;