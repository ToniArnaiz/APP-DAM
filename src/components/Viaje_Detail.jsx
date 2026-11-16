



export function Viaje_Detail({viaje,navigate_to,delete_viaje}) {


    return (
        <>
            <button
                onClick={ navigate_to }
            >
                {viaje.titulo}
            </button>
            <div>
                <p>{/*fechas*/}</p>
                <button
                    onClick={ delete_viaje }
                >
                    X
                </button>
            </div>
        </>
    )
}