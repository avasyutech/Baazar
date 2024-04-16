import React, { useState, useEffect } from "react";
import "./Header.scss";
import Wrapper from "../../../helpers/Wrapper";
import Dropdown from "../../atoms/DropDown/DropDown";
import InputBox from "../../atoms/InputBox/InputBox";
import SocialMedia from "../../atoms/SocialMedia/SocialMedia";
import Logo from "../../atoms/Logo/Logo";
import { useCart } from '../../../context/CartContext';
import Login from "../../atoms/Login/Login";
import Logout from "../../atoms/Logout/Logout";
import { useNavigate } from 'react-router-dom';
import { useGlobal } from "../../../context/GlobalContext";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const languageOptions = ["Eng", "Rus"];
  const currencyOptions = ["USD", "EUR"];
  const categoryOptions = [
    "All Categories",
    "Laptop",
    "Smartphone",
    "Headphone",
    "Gaming Console",
    "Monitor",
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);

  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const { loginSuccess, setLoginSuccess } = useGlobal();

  const [showMenu, setShowMenu] = useState(false);
  const { cartValue } = useCart();
  const navigate = useNavigate();

  const headerSearch = (searchValue) => {
    return searchValue;
  };

  const navigateToCart = () => {
    if (loginSuccess) {
      navigate('/checkout');
    }
    else {
      setOpenLogin(true);
      toast.success("please login", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        style: {
          color: "#757575",
        },
      });
    }
  };

  const navigateToWishlist = () => {
    alert("navigating page in progress");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userLoggedIn = storedUser && storedUser.expiry > Date.now();

    if (userLoggedIn) {
      setLoggedUser(storedUser.user);
      setLoginSuccess(true);
    }
    else {
      setOpenLogin(false);
      localStorage.removeItem('cart');
      localStorage.removeItem('cartValue');
    }
  }, []);

  const onLogin = (user) => {
    setLoggedUser(user);
    setLoginSuccess(true);
    const expiry = Date.now() + 3600000;
    localStorage.setItem('user', JSON.stringify({ user, expiry }));
    setOpenLogin(false);
  };

  const onLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('cartValue');setLoginSuccess(false);
    setOpenLogout(false);
    setOpenLogin(false);
  };

  return (
    <header>
      <div className="header">
        <div className="header-top-wrapper">
          <nav className="header-top-bar w-90">
            <div className="header__brand">
              <p>Welcome to Bazaar online eCommerce store.</p>
            </div>
            <div className="header__actions">
              <div className="header__social-media">
                <p>Follow us:</p>
                <SocialMedia />
              </div>
              <div className="header__dropdown">
                <Dropdown options={languageOptions} selected={selectedLanguage} setSelected={setSelectedLanguage} />
                <Dropdown options={currencyOptions} selected={selectedCurrency} setSelected={setSelectedCurrency} />
              </div>
            </div>
          </nav>
        </div>

        <nav className="header-logo-bar w-90">
          <Logo />
          <div className="header__search">
            <InputBox type="text" id="header-search" label="header-search" placeholder="Search for anything..." handleSearch={headerSearch} />
          </div>
          <div className="header__icons-wrapper">
            <div className="cart" onClick={navigateToCart}>
              <img src='http://localhost:9000/icons/ShoppingCart-white.svg' alt="shopping cart" />
              <span className="circle cart-value body-tiny-600">{cartValue}</span>
            </div>
            <div className="wishlist" onClick={navigateToWishlist}>
              <img src='http://localhost:9000/icons/Heart-white.svg' alt="heart" />
            </div>
            <div className="user">
              {loginSuccess ? (
                <Wrapper>
                  <span className="body-small-600" onClick={(e) => setOpenLogout(!openLogout)}>{loggedUser.name[0]}</span>
                  {openLogout && <Logout onLogout={onLogout} setOpenLogout={setOpenLogout} />}
                </Wrapper>
              ) : (
                <Wrapper>
                  <img src='http://localhost:9000/icons/User.svg' alt="user" onClick={(e) => setOpenLogin(!openLogin)} />
                  {openLogin && <Login onLogin={onLogin} openLogin={openLogin} setOpenLogin={setOpenLogin} />}
                </Wrapper>
              )}
            </div>
            <div className="menu-bar" onClick={() => setShowMenu(true)}>
              <img src="http://localhost:9000/icons/hamburger-white.png" alt="menu icon" />
            </div>
          </div>
        </nav>
      </div>
      <div className={showMenu ? "header-bottom-bar show" : "header-bottom-bar"}>
        <nav className="header-navigation w-90">
          <div className={showMenu ? "left-bar show" : "left-bar"}>
            <div className="close-blk sm-circle" onClick={() => setShowMenu(false)}>
              <img src="http://localhost:9000/icons/close.png" alt="close icon" />
            </div>
            <div className="social-media-vertical">
              <a href="#" className="sm-circle">
                <img src="http://localhost:9000/icons/facebook.png" alt="facebook icon" />
              </a>
              <a href="#" className="sm-circle">
                <img src="http://localhost:9000/icons/instagram.png" alt="instagram icon" />
              </a>
              <a href="#" className="sm-circle">
                <img src="http://localhost:9000/icons/twitter.png" alt="twitter icon" />
              </a>
              <a href="#" className="sm-circle">
                <img src="http://localhost:9000/icons/youtube.png" alt="youtube icon" />
              </a>
            </div>
          </div>
          <div className="header-navigation__services">
            <Dropdown
              options={categoryOptions}
              variant="category"
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="header-navigation__services__list">
              <div className="service">
                <img src='http://localhost:9000/icons/MapPinLine.svg' alt="location" />
                <span className="service__text">Track Order</span>
              </div>
              <div className="service">
                <img src='http://localhost:9000/icons/ArrowsCounterClockwise.svg' alt="double arrow" />
                <span className="service__text">Compare</span>
              </div>
              <div className="service">
                <img src='http://localhost:9000/icons/Headphones.svg' alt="headset" />
                <span className="service__text">Customer Support</span>
              </div>
              <div className="service">
                <img src='http://localhost:9000/icons/Info.svg' alt="information" />
                <span className="service__text">Need Help</span>
              </div>
            </div>
          </div>
          <div className="service">
            <img src='http://localhost:9000/icons/phone-call.png' alt="phone" />
            <span className="service__text">+91 9658527873</span>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
