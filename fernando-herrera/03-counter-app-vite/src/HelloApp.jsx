//PropTypes --> yarn add prop-types
import PropTypes from 'prop-types';

export const App = ( {
    name,
    status,
    subTitle, 
    title, 
} ) => {
    return (
        <>
        <h1>{title}</h1>
        <p>Hola {name}, Soy un subtitulo de tipo número {subTitle}</p>
        <code>{status?'Verdadero':'Falso'}</code>
        </>
    );
}

//Ayuda a valida el tipo de dato de cada prop
App.propTypes = {
    name: PropTypes.string,
    status: PropTypes.bool,
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string,
}

App.defaultProps = {
    name: 'Guillermo Malagón',
    status: false,
    subTitle: 777,
    title : 'Default Title',
}