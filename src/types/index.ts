export type PresupuestoInicial = {
    budget: number
}
export type Categoria = {
    id: string,
    name: string,
    icon: string
}

export type GastoStorage = {
    id: string
    nombre: string,
    monto: number,
    categoria: string,
    fecha: Date
}

export type GastoTemporal = Pick<GastoStorage, "nombre" | "monto" | "categoria" | "fecha">