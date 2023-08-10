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

<Header></Header>

  <div class="bg-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
      </div>
    </div>
  </div>

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

  <Footer></Footer>

</body>








</div>
 
  )
}

Shop.propTypes = {}

export default Shop
