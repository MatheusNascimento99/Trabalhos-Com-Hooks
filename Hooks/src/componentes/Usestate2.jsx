import { useState } from "react";

function Usestate2 (){

    const [registrador, setRegistrador] = useState (0);

    function Mais (){
        setRegistrador(registrador +1);
    }

    function Menos (){
        setRegistrador(registrador-1);

    }

    function Z () {
        setRegistrador(0);
    }


    return(
        <h1>
            Aqui virá o retorno
            <p>
            {registrador}
            </p>
            <div>
                <button onClick={Mais}>+</button>
                <button onClick={Menos}>-</button>
                <button onClick={Z}>Zerar</button>
            </div>
            
        </h1>
    )
}

export default Usestate2