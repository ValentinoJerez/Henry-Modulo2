import React from "react";

//Sintaxis correcta de una funcion de clase:
class Botones extends React.Component {
    constructor(props){
      super (props)
        }
        render(){
        return (
        <div>
            <button onClick={() => alert('Aprobado')}>Módulo 1</button>
            <button onClick={() => alert('En curso')}>Módulo 2</button>
        </div>
        )
        }
  };

//Exporto los botones a componentes
export default Botones;