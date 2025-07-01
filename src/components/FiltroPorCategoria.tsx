import {type ChangeEvent, Fragment} from "react";
import {categories} from "../data";
import {useBudget} from "../hooks/useBudget.ts";

const FiltroPorCategoria = () => {
    const {dispatch} = useBudget();
    return (
        <Fragment>
            <div className="bg-white shadow-lg rounded-lg p-10 mb-10">
                <form>
                    <div className="space-y-2">
                        <label className="text-lg font-semibold text-gray-700" htmlFor="">Filtrar Gastos</label>
                        <select className="w-full p-2 rounded-lg"
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                dispatch({type: "addFilter", payload: {categoryId: e.target.value}});
                            }}
                        >
                            <option value="">--- Selecciona una Categoria ---</option>
                            {categories.map((categoria) => {
                                return(
                                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
export default FiltroPorCategoria;