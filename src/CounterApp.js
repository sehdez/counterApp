import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ( {value = 5} ) => {

    const [counter, setCounter] = useState( value );


    const cambiarValor = ( numero ) =>{
        setCounter(counter +numero);
    }
    const reset = () => {
        setCounter( value )
    }

    return (
        <>
        <h1> CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ () =>  cambiarValor( 1 )  }> +1 </button>
        <button onClick={ reset  }> Reset </button>
        <button onClick={ () =>  cambiarValor( -1 )  }> -1 </button>
        </>
    );

}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export default CounterApp

