import { Descripcion} from "./descripcion.styles";

const Description = () => (
    <Descripcion>
        <input onChange= {console.log('hola')} value={1} type = 'text' placeholder="Titulo" ></input>
        <input onChange= {console.log('hola')} value={1} type = 'text' placeholder="Subtitulo" ></input>
        <input onChange= {console.log('hola')} value={1}type = 'text' placeholder="Precio" ></input>
        <input onChange= {console.log('hola')} value={1} type = 'text' placeholder="Comentarios al pie"></input>
    </Descripcion>
)

export default Description;