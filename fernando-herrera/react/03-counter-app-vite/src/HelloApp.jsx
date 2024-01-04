//PropTypes --> yarn add prop-types
import PropTypes from 'prop-types';

export const App = ( {
    //Estas propiedades son las que van a llegar desde el llamado a nuestro FUNCTIONAL COMPONENT
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

//Ayuda a validar el tipo de dato de cada propiedad o variables de nuestro FUNCTIONAL COMPONENT
App.propTypes = {
    name: PropTypes.string,
    status: PropTypes.bool,
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string,
}

//Valores por defecto de cada una de las propiedades o variables de nuestro FUNCTIONAL COMPONENT
App.defaultProps = {
    name: 'Guillermo Malagón',
    status: false,
    subTitle: 777,
    title : 'Default Title',
}