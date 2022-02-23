import { useEffect,useState } from "react";

function EJ10FrontendMayores() {
    
    const [puntuaciones, setPuntuaciones] = useState([])
    const [numero, setNumero] = useState(0)

    async function llamada() {
        const req = await fetch('http://localhost:5300/puntuacion?mayor=' + numero)
        const data = await req.json()
        setPuntuaciones(data.datos)      
    }

    let handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "numero") setNumero(value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        llamada()
    }
    
    return <>

        <form onSubmit={handleSubmit}>
            <label>Introduce un numero: 
                <input name="numero" value={numero} onChange={handleChange}/>
                <input type="submit" value="enviar"/>
            </label>
        </form>

        <ul>
            {puntuaciones.map(puntuacion => <li key={puntuacion._id}>{puntuacion.puntuacion}</li>)}
        </ul>

    </>
}

export default EJ10FrontendMayores;