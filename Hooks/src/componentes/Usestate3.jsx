import {useState} from 'react';

function Evento(){
    //Definindo um estado inicial para o texto(atring vazia)
    const [texto, setTexto] = useState('');
    //função para atualizar o estado quando o usuário digitar
    const Atualizando = (evento) =>{
        setTexto (evento.target.value);
    }
    return(
        <div>
            <input type='text' value={texto} onChange={Atualizando}>
            
            </input>
            <p>
                Você digitou: {texto}
            </p>
        
        </div>
    )
}
export default Evento