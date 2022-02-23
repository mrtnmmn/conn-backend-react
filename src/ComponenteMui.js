import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import './App.css';
import { useState } from "react"

function ComponenteMui() {

    const [valueSlider, setValorSlider] = useState()

    const showMsg = () => {
        alert('hola')
    } 

    const handleChange = (e) => {

        setValorSlider(e.target.value)
        console.log(valueSlider)
    }

    return <div className='App'>
        <div className='App-header'>
            <h1>Componente Ejemplo</h1>
            <Button onClick={showMsg} variant="outlined">Outlined</Button>

            <Box width={300}>
                <Slider defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto"
                    step={10}
                    min={10} 
                    onChange={handleChange}/>
            </Box>
        </div>
    </div>;
}

export default ComponenteMui;