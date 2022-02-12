import React from "react";
import { Extras, Wrapper } from "./extras.styles";

const Extra = () => {
    return (
        <Extras>
            <Wrapper>
            <label>Superficie total
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Valor en m2"></input>
            </label>
            </Wrapper>
            <Wrapper>
            <label>Superficie interior
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Valor en m2"></input>  
            </label>
            </Wrapper>
            <Wrapper>
            <label>Baños
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Numero de autos"></input>    
            </label>
            </Wrapper>
            <Wrapper>
            <label>Dormitorios
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Cuantos"></input>           
            </label>
            </Wrapper>
            <Wrapper>
            <label>Garage
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Cuantas"></input>           
            </label>
            </Wrapper>
            <Wrapper>
            <label>Bañera
                <input type= 'checkbox' onClick={() => console.log('hola')}></input>
                <input value= {1} onChange= {() => console.log('hola')} type= 'text' placeholder="Cuantos"></input>           
            </label>
            </Wrapper>
        </Extras>
    )
}

export default Extra;