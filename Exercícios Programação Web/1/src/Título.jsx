import { useState } from "react"
function Título({nome, paragrafo}){
    const [texto, setTexto] = useState("Estado Inicial")
    return(
        <div>
            <h1>{texto}</h1>
            <button onClick={()=>setTexto("Clicou")}>Mudar</button>
            <h2>Meu nome é {nome} é tem {nome.length} letras</h2>
            {paragrafo ?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium libero corrupti ducimus, dolorum pariatur natus iste aliquam necessitatibus beatae ratione voluptatem maxime doloribus a velit animi, quas molestias deleniti.</p> 
            :
                <p></p>
            }
        </div>
    )
}
export default Título