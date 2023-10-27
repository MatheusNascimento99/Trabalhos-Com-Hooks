import {useState} from 'react';

function Usestate1 (){
    const [style, setStyle] = useState ('blue');
    const [color, setColor] = useState ('black');

    function Trocar () {
        if (style ==='blue'){
            setStyle('red');
        } if (style === 'red') {
            setStyle('yellow');
        }else if (style ==='yellow'){
            setStyle('green');
        } else if (style === 'green'){
            setStyle('purple');
        } else if (style === 'purple') {
            setStyle('blue');
        }
    }

    

    function Mudar () {
        if (color ==='black'){
           setColor('yellow');
        } if (color === 'yellow') {
           setColor('blue');
        }else if (color ==='blue'){
           setColor('green');
        } else if (color === 'green'){
           setColor('purple');
        } else if (color === 'purple') {
           setColor('red');
        } else if (color ==='red'){
            setColor('black');
        }
    }


    return(
        <div style = {{backgroundColor: style}}>
            <h1 style = {{color: color}}> Elemento para alterar os estilo</h1>
            <button onClick={Trocar}> Trocar a cor de fundo</button>
            <button  onClick={Mudar}> Muda cor da letra</button>

        </div>
    );
}

export default Usestate1