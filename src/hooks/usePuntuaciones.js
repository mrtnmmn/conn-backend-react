import { useState, useEffect } from "react";

export function usePuntuaciones() {
    const [puntuaciones, setPuntuaciones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        async function llamadaAPI(){
            const req = await fetch('http://localhost:5300/puntuacion/')
            const data = await req.json()
            setPuntuaciones(data.datos)
            setLoading(false)
        }
        llamadaAPI()
    }, [])

    return { puntuaciones, loading }
}

