import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./ropa";
export default function Header() {
  const {ProductoSeleccionado}=useContext(CarritoContext)
  return (
    <div>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-logo">
              <a href="/" className="js-logo-clone">
                Shoppers
              </a>
            </div>
            <div className="site-mobile-menu-close ">
              <span className="ion-ios-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li className="has-children active">
                <span
                  className="arrow-collapse collapsed"
                  data-toggle="collapse"
                  data-target="#collapseItem0"
                ></span>
                <Link to="/home">Home</Link>
                <ul className="collapse" id="collapseItem0">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                  <li className="has-children">
                    <span
                      className="arrow-collapse collapsed"
                      data-toggle="collapse"
                      data-target="#collapseItem1"
                    ></span>
                    <a href="#">Sub Menu</a>
                    <ul className="collapse" id="collapseItem1">
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span
                  className="arrow-collapse collapsed"
                  data-toggle="collapse"
                  data-target="#collapseItem2"
                ></span>
                <a href="about.html">About</a>
                <ul className="collapse" id="collapseItem2">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <a href="#">Catalogue</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <header className="site-navbar" role="banner">
          <div className="site-navbar-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form action="" className="site-block-top-search">
                    <span className="icon icon-search2"></span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search"
                    ></input>
                  </form>
                </div>

                <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div className="site-logo">
                    <a href="/" className="js-logo-clone">
                      Shoppers
                    </a>
                  </div>
                </div>

                <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                  <div className="site-top-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <span className="icon icon-person"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon icon-heart-o"></span>
                        </a>
                      </li>
                      <li>
                        <Link to="/cart">
                          <span className="icon icon-shopping_cart"></span>
                          <span className="count">{ProductoSeleccionado.length}</span>{" "}
                        </Link>
                      </li>
                      <li className="d-inline-block d-md-none ml-md-0">
                        <a href="#" className="site-menu-toggle js-menu-toggle">
                          <span className="icon-menu"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="site-navigation text-right text-md-center"
            role="navigation"
          >
            <div className="container">
              <ul className="site-menu js-clone-nav d-none d-md-block">
                <li className="has-children active">
                  <a href="/">Home</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li>
                      <a href="#">Menu Three</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Sub Menu</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Menu One</a>
                        </li>
                        <li>
                          <a href="#">Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Menu Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/shop">Shop</Link>{" "}
                </li>

                <li>
                  <Link to="/contacto">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
