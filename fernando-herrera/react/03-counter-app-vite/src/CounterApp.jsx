import { useState } from 'react';//todos los "use..." son hooks
import PropTypes from 'prop-types';

export const CounterApp = ({
    value,
}) => {

    //MI primer Hook
    const [ counter, setCounter ] = useState( value );

    //Al estar dentro del FUNCTIONAL COMPONENT, se renderiza en memoria cada vez que se recarga, mejor afuera si no se requiere este renderizado
    const handleAdd = () => {
        // console.log(event);
        //opción 1 para sumar al counter
        setCounter( counter +1 );
        //opcion 2 para sumar al counter
        //setCounter( (c) => c+1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value } - { counter }</h2>

            {/*EVENTOS  https://es.react.dev/learn/adding-interactivity */}
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};