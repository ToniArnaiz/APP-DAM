


async function fetch_viajes_detail() {
    const respuesta = await fetch(`http://https://6b05bed4db01cf4636090390.mockapi.io/vianda/viaje_detail`);

    if (!respuesta.ok) {

        throw new Error(`La API respondió ${respuesta.status}`)
    }

    const data = await respuesta.json();

    return data;
}

async function fetch_viaje_by_id(id) {
    const respuesta = await fetch(`http://https://6b05bed4db01cf4636090390.mockapi.io/vianda/Viaje/${id}`);

    if (!respuesta.ok) {

        throw new Error(`La API respondió ${respuesta.status}`)
    }

    const data = await respuesta.json();

    return data;
}