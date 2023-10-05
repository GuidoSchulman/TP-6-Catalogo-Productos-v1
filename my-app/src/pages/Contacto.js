import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import FormularioContacto from '../components/formularioContacto'
import Sucursales from '../components/sucursales'
function Contacto(props) {
  return (
    <>
    
        <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Get In Touch</h2>
          </div>
          <FormularioContacto></FormularioContacto>
          <div className="col-md-5 ml-auto">
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
