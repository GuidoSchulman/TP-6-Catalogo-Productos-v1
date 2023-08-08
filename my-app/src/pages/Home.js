import React from 'react'
import PropTypes from 'prop-types'
import PerfectShoe from "../components/perfectShoe";
import FeaturedProducts from "../components/featuredProducts";
import Footer from "../components/footer";

function Home(props) {
  return (<>
      <PerfectShoe></PerfectShoe>
      <FeaturedProducts></FeaturedProducts>
      <Footer></Footer>
  </>

  )
}

Home.propTypes = {}

export default Home
