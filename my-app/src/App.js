import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">
     

<div class="site-wrap"><div class="site-mobile-menu"><div class="site-mobile-menu-header"><div class="site-mobile-menu-logo"><a href="index.html" class="js-logo-clone">Shoppers</a></div><div class="site-mobile-menu-close "><span class="ion-ios-close js-menu-toggle"></span></div></div><div class="site-mobile-menu-body"><ul class="site-nav-wrap">
          <li class="has-children active"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
            <a href="index.html">Home</a>
            <ul class="collapse" id="collapseItem0">
              <li><a href="#">Menu One</a></li>
              <li><a href="#">Menu Two</a></li>
              <li><a href="#">Menu Three</a></li>
              <li class="has-children"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem1"></span>
                <a href="#">Sub Menu</a>
                <ul class="collapse" id="collapseItem1">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-children"><span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem2"></span>
            <a href="about.html">About</a>
            <ul class="collapse" id="collapseItem2">
              <li><a href="#">Menu One</a></li>
              <li><a href="#">Menu Two</a></li>
              <li><a href="#">Menu Three</a></li>
            </ul>
          </li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul></div></div>
  <header class="site-navbar" role="banner">
    <div class="site-navbar-top">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
            <form action="" class="site-block-top-search">
              <span class="icon icon-search2"></span>
              <input type="text" class="form-control border-0" placeholder="Search"></input>
            </form>
          </div>

          <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
            <div class="site-logo">
              <a href="index.html" class="js-logo-clone">Shoppers</a>
            </div>
          </div>

          <div class="col-6 col-md-4 order-3 order-md-3 text-right">
            <div class="site-top-icons">
              <ul>
                <li><a href="#"><span class="icon icon-person"></span></a></li>
                <li><a href="#"><span class="icon icon-heart-o"></span></a></li>
                <li>
                  <a href="cart.html" class="site-cart">
                    <span class="icon icon-shopping_cart"></span>
                    <span class="count">2</span>
                  </a>
                </li> 
                <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
              </ul>
            </div> 
          </div>

        </div>
      </div>
    </div> 
    <nav class="site-navigation text-right text-md-center" role="navigation">
      <div class="container">
        <ul class="site-menu js-clone-nav d-none d-md-block">
          <li class="has-children active">
            <a href="index.html">Home</a>
            <ul class="dropdown">
              <li><a href="#">Menu One</a></li>
              <li><a href="#">Menu Two</a></li>
              <li><a href="#">Menu Three</a></li>
              <li class="has-children">
                <a href="#">Sub Menu</a>
                <ul class="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li><a href="shop.html">Shop</a></li>
          
          
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="site-blocks-cover aos-init aos-animate" style={{backgroundImage: 'url(images/hero_1.jpg)'}} data-aos="fade">
    <div class="container">
      <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
          <h1 class="mb-2">Finding Your Perfect Shoes</h1>
          <div class="intro-text text-center text-md-left">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
            <p>
              <a href="#" class="btn btn-sm btn-primary">Shop Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  

  <div class="site-section block-3 site-blocks-2 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 site-section-heading text-center pt-4">
          <h2>Featured Products</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="nonloop-block-3 owl-carousel owl-loaded owl-drag">
            
            
            
            
            
          <div class="owl-stage-outer"><div class="owl-stage" style={{transform: 'translate3d(-366px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '1864px', paddingleft: '15px', paddingright: '15px'}}><div class="owl-item" style={{width: '346.667px', marginright: '20px'}}><div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="images/cloth_1.jpg" alt="Image placeholder" class="img-fluid"></img>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Tank Top</a></h3>
                  <p class="mb-0">Finding perfect t-shirt</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div></div><div class="owl-item active" style={{width: '346.667px', marginright: '20px'}}><div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="images/shoe_1.jpg" alt="Image placeholder" class="img-fluid"></img>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Corater</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div></div><div class="owl-item active" style={{width: '346.667px', marginright: '20px'}}><div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="images/cloth_2.jpg" alt="Image placeholder" class="img-fluid"></img>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Polo Shirt</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div></div><div class="owl-item active" style={{width: '346.667px', marginright: '20px'}}><div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="images/cloth_3.jpg" alt="Image placeholder" class="img-fluid"></img>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">T-Shirt Mockup</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div></div><div class="owl-item" style={{width: '346.667px', marginright: '20px'}}><div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="images/shoe_1.jpg/" alt="Image placeholder" class="img-fluid"></img>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Corater</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div></div></div></div><div class="owl-nav"><div class="owl-prev"><span class="icon-arrow_back"></span></div><div class="owl-next"><span class="icon-arrow_forward"></span></div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>
        </div>
      </div>
    </div>
  </div>

  

  <footer class="site-footer border-top">
    <div class="container">
      
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <p>
      
          Copyright ©<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
       
          </p>
        </div>
        
      </div>
    </div>
  </footer>
</div> 
    </body>
    
  );
}

export default App;
