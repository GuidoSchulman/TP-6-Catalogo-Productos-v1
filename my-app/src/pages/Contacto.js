import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import FormularioContacto from '../components/formularioContacto'
import Sucursales from '../components/sucursales'
function Contacto(props) {
  return (
    <>
    
        <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black">Get In Touch</h2>
          </div>
          <FormularioContacto></FormularioContacto>
          <div class="col-md-5 ml-auto">
            <Sucursales></Sucursales>

          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

Contacto.propTypes = {}

export default Contacto
