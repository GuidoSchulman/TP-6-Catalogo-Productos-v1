import React from 'react'
import Filter from '../components/filter'
import Filter2 from '../components/filter2'
import Ropa from '../components/ropa'
function Shop(props) {
  return (
    <div>
        <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">


  <div className="site-section">
    <div className="container">
    <Filter></Filter>
      <div className="row mb-5">
        <div className="col-md-9 order-2">
          <Ropa></Ropa>
          </div>
          <div className="col-md-3 order-1 mb-5 mb-md-0">
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
