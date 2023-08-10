import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Filter from '../components/filter'
import Filter2 from '../components/filter2'
import Footer from '../components/footer'
import Ropa from '../components/ropa'
function Shop(props) {
  return (
    <div>
        <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">


  <div class="site-section">
    <div class="container">
    <Filter></Filter>
      <div class="row mb-5">
        <div class="col-md-9 order-2">
          <Ropa></Ropa>
          </div>
          <div class="col-md-3 order-1 mb-5 mb-md-0">
            <Filter2></Filter2>
            </div>

    </div>
    </div>
  </div>


</body>








</div>
 
  )
}

Shop.propTypes = {}

export default Shop
