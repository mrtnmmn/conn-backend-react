import { useState, useEffect } from "react";

// Vamos a usar un custom hook
function Ejercicio7ListaPuntuaciones() {
    const [puntuaciones, setPuntuaciones] = useState([]);

    useEffect(() => {
        async function llamadaAPI(){
            const req = await fetch('http://localhost:5300/puntuacion/')
            const data = await req.json()
            setPuntuaciones(data.datos)
        }
        llamadaAPI()
    }, [])

    return <>
        <h3>Listado de puntuaciones</h3>
        <ul>
            {puntuaciones.map(puntuacion => <li key={puntuacion._id}>{puntuacion.puntuacion}</li>)}
        </ul>
    </>
}

export default Ejercicio7ListaPuntuaciones;