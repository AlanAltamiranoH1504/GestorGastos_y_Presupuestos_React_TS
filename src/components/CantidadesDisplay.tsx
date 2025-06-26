import {Fragment} from "react";
import {formatCurrency} from "../helpers";

type CantidadesDisplayProps = {
    label: string,
    cantidad: number
}
const CantidadesDisplay = ({label, cantidad}: CantidadesDisplayProps) => {
    return (
        <Fragment>
            <p className="text-2xl text-blue-600 font-bold">
                {label}:{" "}
                <span className="font-black text-black">{formatCurrency(cantidad)}</span>
            </p>
        </Fragment>
    );
}
export default CantidadesDisplay;