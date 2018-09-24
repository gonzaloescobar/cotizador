import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  }
  
  cotizarSeguro = (datos) =>{

    let resultado = 2000;
    const {marca, plan, year} = datos;
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado ) / 100; 
    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }

    this.setState({
      resultado : resultado,
      datos : datosAuto
    })
    
  }

  render() {
    return (
      <div className= "contenedor">
      <Header titulo ='Cotizador de Seguro de Auto'/>

        <div className= "contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
