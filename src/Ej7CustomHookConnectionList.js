import { usePuntuaciones } from "./hooks/usePuntuaciones";

function Ej7CustomHookConnectionList() {
    const { puntuaciones, loading } = usePuntuaciones();

    return <>
        <h3>Listado de puntuaciones</h3>
        {
            loading ? 
            <p>Cargando...</p> :
            <ul>
                {puntuaciones.map(puntuacion => <li key={puntuacion._id}>{puntuacion.puntuacion}</li>)}
            </ul>
        }
    </>
}

export default Ej7CustomHookConnectionList;