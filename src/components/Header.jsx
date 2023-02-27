import React, { useState } from 'react'
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logo from '../images/incard-sm.png'
import { Link } from 'react-router-dom'

function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header className="header" id="header">
      <div className="container header__container">
        <div className="logo header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="header__nav">
          <div className="header__nav-links">
            <Link to="/" className="header__nav-link">Biz haqimizda</Link>
            <Link to="/" className="header__nav-link">Qanday ulanish mumkin?</Link>
            <Link to="/" className="header__nav-link">Bog'lanish</Link>
          </div>
          <div className="header__nav-buttons">
            <div className="header__nav-lang">
              <button className="button round button-light">RU</button>

              <div className="header__nav-list">
                <div className="header__nav-tr"></div>
                <div className="header__nav-items">
                  <div className="header__nav-item">O'zbekcha</div>
                  <div className="header__nav-item">Русский</div>
                  <div className="header__nav-item">English</div>
                </div>
              </div>
            </div>
            <button className="button button-primary">Kirish</button>
          </div>
        </nav>

        <nav className={"mobile-menu " + (isMobileMenu ? 'active' : '')}>
          <div className="mobile-menu__head">
            <div className="logo header__logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            <button className='button round icon button-light mobile-menu__close' onClick={() => setIsMobileMenu(false)}><FiX /></button>
          </div>
          <div className="mobile-menu__body">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <Link to="/" className="mobile-menu__link">Biz haqimizda</Link>
              </li>
              <li className="mobile-menu__item">
                <Link to="/" className="mobile-menu__link">Qanday ulanish mumkin?</Link>
              </li>
              <li className="mobile-menu-item">
                <Link to="/" className="mobile-menu__link">Bog'lanish</Link>
              </li>
              <li className="mobile-menu-item">
                <span className="mobile-menu__title">Til</span>
              </li>
              <li className="mobile-menu-item">
                <span className="mobile-menu__link active">O'zbekcha</span>
              </li>
              <li className="mobile-menu-item">
                <span className="mobile-menu__link">Русский</span>
              </li>
              <li className="mobile-menu-item">
                <span className="mobile-menu__link">English</span>
              </li>
            </ul>
          </div>
        </nav>

        <button className='button round icon button-light header__hamburger' onClick={() => setIsMobileMenu(true)}><FiMenu /></button>
      </div>
    </header>
  )
}

export default Header