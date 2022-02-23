import { useEffect, useState } from "react";
import './App.css';


function Ej02Classroom() {

    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [mayor, setMayor] = useState(0);
    const [media, setMedia] = useState(0);
    
    useEffect(() => {
        calcularMayor()
        calcularMedia()
    }, [numeros])
    
    let handleChange = e => {
        if(e.target.value === ""){
            setNumero(0);
        }else{
            setNumero(parseInt(e.target.value));
        }
    }
    let handleSubmit = e => {
       /* let nuevoArrayNumeros = numeros;
        nuevoArrayNumeros.push(numero); 
        setNumeros(nuevoArrayNumeros);*/
        setNumeros([...numeros, numero]);  
        e.preventDefault();
    }

    let handleRemove =  index => {
        let nuevoArrayNumeros = numeros;
        nuevoArrayNumeros = nuevoArrayNumeros
            .filter( (numero,i) => i !== index)
       // nuevoArrayNumeros.slice(index,1)
        setNumeros(nuevoArrayNumeros);
    }

    let calcularMayor = () => {
        let mayor = numeros[0];
        numeros.forEach(numero => {
            if(numero > mayor){
                mayor = numero;
            }
        })
        setMayor(mayor);
    }
    let calcularMedia = () => {
        let suma = 0;
        numeros.forEach(numero => {
            suma += numero;
        })
        setMedia(suma/numeros.length);
    }

    return <div className="App">
        <header className="App-header">
            <form onSubmit={handleSubmit}>
                <label>Inserta un numero: 
                    <input name="numero" value={numero} onChange={handleChange}></input>
                </label>
                <input type="submit" value="Guardar"></input>
            </form>
            <ul>
                {numeros.map((numero, index) => <li key={index}>{numero} &nbsp; <a href="#" onClick={e => handleRemove(index)}>X</a></li>)}
            </ul>

            <div>
                el mayor vale: {mayor}

            </div>

            <div>
                la media vale: {media}
            </div>
        </header>
    </div>
}

export default Ej02Classroom;