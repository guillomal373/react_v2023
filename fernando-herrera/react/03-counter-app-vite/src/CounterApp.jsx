import PropTypes from 'prop-types';

export const CounterApp = ({
    value,
}) => {

    //Al estar dentro del FUNCTIONAL COMPONENT, se renderiza en memoria cada vez que se recarga, mejor afuera si no se requiere este renderizado
    const handleAdd = (event) => {
        console.log(event)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

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