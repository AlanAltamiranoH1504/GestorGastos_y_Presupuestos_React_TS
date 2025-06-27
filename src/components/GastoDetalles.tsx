import {Fragment, useMemo} from "react";
import type {Categoria, GastoStorage} from "../types";
import {formatDate} from "../helpers";
import CantidadesDisplay from "./CantidadesDisplay.tsx";
import {categories} from "../data";

type GastoListProps = {
    gasto: GastoStorage
}
const GastoDetalles = ({gasto}: GastoListProps) => {
    const categoriaInfo: Categoria = useMemo(() => categories.filter((cat) => {
        return cat.id === gasto.categoria
    }), [gasto])[0];

    return (
        <Fragment>
            <div className="bg-white shadow-lg p-10 w-full border-b border-gray-300 flex gap-5 items-center">
                <div>
                    <img
                        src={`/icono_${categoriaInfo.icon}.svg`}
                        alt={categoriaInfo.name}
                        className="w-20"
                    />
                </div>
                <div className="flex-1 space-y-3">
                    <p className="text-sm font-bold uppercase text-slate-500">{categoriaInfo.name}</p>
                    <p className="font-semibold text-lg">{gasto.nombre}</p>
                    <p className="text-slate-600 text-sm capitalize">{formatDate(gasto.fecha.toString())}</p>
                </div>
                <CantidadesDisplay cantidad={gasto.monto}/>
            </div>
        </Fragment>
    );
}
export default GastoDetalles;