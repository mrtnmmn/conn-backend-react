import { useState } from "react";

function Ej08FormInsert() {

    const [puntuation, setPuntuation] = useState("")
    const [token, setToken] = useState()

    let handleSubmit = async (e) => {
        // tratar con los datos del formulario
        fetch('http://localhost:5300/puntuacion/', {
            headers: {
                // 'auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({puntuacion: puntuation, date:new Date()})
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })

        e.preventDefault();
    }
    let handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "puntuacion") setPuntuation(value);
        if (name === "token") setToken(value);
    }

    return <form onSubmit={handleSubmit}>
        <label>Puntuacion: 
            <input name="puntuacion" value={puntuation} onChange={handleChange}/>
        </label>
        <label>Token: 
            <input name="token" value={token}/>
        </label>
        <input type="submit" value="Enviar" />
    </form>;
}

export default Ej08FormInsert;