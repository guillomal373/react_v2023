//PropTypes --> yarn add prop-types
import PropTypes from 'prop-types';

export const App = ( {title, subTitle, estado} ) => {

    return (
        <>
        <h1>{title}</h1>
        <p>Soy un subtitulo de tipo número {subTitle}</p>
        <code>{estado?'Verdadero':'Falso'}</code>
        </>
    );
}

//Ayuda a valida el tipo de dato de cada prop
App.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.number.isRequired,
    estado: PropTypes.bool
}