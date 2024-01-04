import { useState } from 'react';//todos los "use..." son hooks
import PropTypes from 'prop-types';

export const CounterApp = ({
    value,
}) => {

    //MI primer Hook
    const [ counter, setCounter ] = useState( value );
    
    //Al estar dentro del FUNCTIONAL COMPONENT, se renderiza en memoria cada vez que se recarga, mejor afuera si no se requiere este renderizado
    const handleAdd = () => {
        setCounter( counter +1 );
    }

    const handleSubtract = () => {
        setCounter( counter -1 );
    }

    const handleResetValue = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value } - { counter }</h2>

            {/*EVENTOS  https://es.react.dev/learn/adding-interactivity */}
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubtract}> -1 </button>
            <button onClick={handleResetValue}> Reset </button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};