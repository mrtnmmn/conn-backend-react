import { useState } from "react";

function Ej11Login() {
    
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    let handleSubmit = async (e) => {
        // tratar con los datos del formulario
        fetch('http://localhost:5300/usuario/login/', {
            headers: {
                // 'auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email: email, password:password})
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })

        e.preventDefault();
    }
    let handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    }
    
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Email: 
                <input name="email" value={email} onChange={handleChange}></input>
            </label>
            <label>Password: 
                <input type="password" name="password" value={password} onChange={handleChange}></input>
            </label>
            <input type="submit" value="Send"></input>
        </form>
    </div>;
}

export default Ej11Login;