export function formatCurrency(cantidad: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(cantidad);
}

export function formatDate(date: string) {
    const dateObj = new Date(date);
    const opciones: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        year: "numeric",
        day: "2-digit"
    }
    return new Intl.DateTimeFormat("es-ES", opciones).format(dateObj);
}