import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';


// Funtional component
const PrimeraApp = ({
    saludo = 'Hola Mundo',
    subtitulo
}) => {

    // const saludo = {
    //     nombre  : 'Sergio',
    //     apellido: 'Hernández'
    // }




    return (
        <>
            {/* <pre>{ JSON.stringify(saludo, null, 3) } </pre> */}
            <h1>{saludo}</h1>
            <p>{ subtitulo }</p>
        </>
    )

}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;



