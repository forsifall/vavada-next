'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e) => {
      const menuWrapper = document.querySelector('.header-buttons-wrapper');
      const burgerButton = document.querySelector('.header-burger-button');
      const closeButton = document.querySelector('.header-close-btn');

      if (
        menuWrapper &&
        burgerButton &&
        closeButton &&
        !menuWrapper.contains(e.target) &&
        !burgerButton.contains(e.target) &&
        !closeButton.contains(e.target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLangDropdownOpen) {
        const langContainer = document.querySelector('.header-lang');
        if (langContainer && !langContainer.contains(e.target)) {
          setIsLangDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangDropdownOpen]);

  const handleAnchorClick = () => {
    closeMenu();
  };

  const languages = [
    { flag: '/content/img/flags/Kazakhstan.svg', name: 'Қазақ' },
    { flag: '/content/img/flags/England.svg', name: 'English' },
    { flag: '/content/img/flags/Ua.svg', name: 'Україн' },
    { flag: '/content/img/flags/Nederlands.svg', name: 'Nederlands' },
    { flag: '/content/img/flags/Poland.svg', name: 'Polski' },
    { flag: '/content/img/flags/Germany.svg', name: 'Deutsch' },
    { flag: '/content/img/flags/Brazil.svg', name: 'Português' },
    { flag: '/content/img/flags/Canada.svg', name: 'Français' },
    { flag: '/content/img/flags/Italy.svg', name: 'Italiano' },
    { flag: '/content/img/flags/Turkey.svg', name: 'Türkçe' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Перейти к основному содержимому
      </a>
      <header className="header">
        <div className="header-wrapper">
          <a
            aria-label="home"
            className="header-logo"
            href="ipc.html"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Vavada online casino"
              height="28"
              src="/content/img/Logo.svg"
              title="Vavada site"
              width="184"
            />
          </a>
          <div className="header-mobile-buttons-wrapper">
            <a
              className="header-button header-enter-button header-social-button base-gradient-border"
              href="ipc.html"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <span className="header-button-content">Войти</span>
            </a>
            <a
              className="header-button header-register-button base-gradient-border"
              href="ipc.html"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <span className="header-button-content">Регистрация</span>
            </a>
            <div className="header-burger-button-wrapper">
              <button
                className="header-burger-button base-gradient-border"
                aria-label="Открыть меню"
                onClick={toggleMenu}
              >
                <img
                  alt="Burger"
                  title="Burger"
                  src="/content/img/Burger.svg"
                  height="16"
                  width="16"
                />
              </button>
            </div>
          </div>
          <div
            className={`overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
          ></div>
          <div className={`header-buttons-wrapper ${isMenuOpen ? 'active' : ''}`}>
            <div className="header-close-btn-and-logo-wrapper">
              <a
                aria-label="home"
                href="ipc.html"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Vavada site"
                  height="24"
                  src="/content/img/Logo.svg"
                  title="Vavada site"
                  width="184"
                />
              </a>
              <button
                className="header-close-btn"
                aria-label="Закрыть меню"
                onClick={closeMenu}
              >
                <img
                  alt="Close"
                  title="Close"
                  src="/content/img/Close.svg"
                  height="28"
                  width="28"
                />
              </button>
            </div>
            <a
              className="header-button header-enter-button header-social-button base-gradient-border"
              href="ipc.html"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <span className="header-button-content">Войти</span>
            </a>
            <nav className="header-nav" aria-label="Основная навигация">
              <a
                href="ipc.html"
                className="header-nav-item"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Слоты
              </a>
              <a
                href="ipc.html"
                className="header-nav-item"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Live
              </a>
              <a
                href="ipc.html"
                className="header-nav-item"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Столы
              </a>
              <a
                href="ipc.html"
                className="header-nav-item"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Турниры
              </a>
              <a
                href="#soder"
                className="header-nav-item"
                id="auto-generated-anchor-id-1"
                onClick={handleAnchorClick}
              >
                Содержание
              </a>
              <a
                href="#faq"
                className="header-nav-item"
                id="auto-generated-anchor-id-2"
                onClick={handleAnchorClick}
              >
                FAQ
              </a>
            </nav>
            <div className="mini-banners">
              <div className="mini-banner-item">
                <img
                  className="mini-banner-background-img"
                  alt="banner-img"
                  width="280"
                  height="60"
                  src="/content/img/mini-banners/Bonuses_bg_mobile_menu_banner.webp"
                  loading="lazy"
                />
                <p className="mini-banner-title">До 1 000 $ + 100 FS</p>
                <p className="mini-banner-text">Приветственный бонус</p>
              </div>
              <div className="mini-banner-item">
                <img
                  className="mini-banner-background-img"
                  alt="banner-img"
                  width="280"
                  height="60"
                  src="/content/img/mini-banners/Mega_jackpot_bg_mobile_menu_banner.webp"
                  loading="lazy"
                />
                <p className="mini-banner-title">MEGA JACKPOT</p>
                <p className="mini-banner-text">Не упусти свой шанс!</p>
              </div>
              <div className="mini-banner-item-social">
                <img
                  className="mini-banner-background-img"
                  alt="banner-img"
                  width="280"
                  height="64"
                  src="/content/img/mini-banners/Support_bg_mobile_menu_banner.webp"
                  loading="lazy"
                />
                <div>
                  <p className="mini-banner-title">Поддержка</p>
                  <p className="mini-banner-text">24/7</p>
                </div>
                <div className="mini-banner-socials-block">
                  <a
                    className="mini-banner-socials-block-btn header-button header-social-button base-gradient-border"
                    href="ipc.html"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="Написать в поддержку"
                  >
                    <img
                      className="header-button-content"
                      alt="message"
                      height="16"
                      width="16"
                      src="/content/img/header-social-icons/Message.svg"
                      title="message"
                    />
                  </a>
                  <a
                    className="mini-banner-socials-block-btn header-button header-social-button base-gradient-border"
                    href="ipc.html"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    aria-label="Telegram поддержка"
                  >
                    <img
                      className="header-button-content"
                      alt="telegram"
                      height="16"
                      width="16"
                      src="/content/img/header-social-icons/Telegram.svg"
                      title="telegram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-register-button-wrapper">
              <div className="header-horizontal-divider"></div>
              <a
                className="header-button header-register-button base-gradient-border"
                href="ipc.html"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span className="header-button-content">Регистрация</span>
              </a>
            </div>
            <div className="header-social-buttons-wrapper">
              <a
                className="header-button header-social-button base-gradient-border"
                href="https://t.me/Vavada_casinoplay_bot"
                rel="nofollow noopener noreferrer"
                target="_blank"
                aria-label="Vavada в Telegram"
              >
                <img
                  className="header-button-content"
                  alt="telegram vavada"
                  height="20"
                  src="/content/img/header-social-icons/Telegram.svg"
                  title="telegram"
                  width="20"
                />
              </a>
              <div className="header-vertical-divider"></div>
            </div>

            <div className="header-lang">
              <div className="choose-lang">
                <button
                  type="button"
                  className="choose-lang-button"
                  aria-label="Выбрать язык: Русский"
                  aria-haspopup="listbox"
                  aria-expanded={isLangDropdownOpen}
                  onClick={toggleLangDropdown}
                >
                  <img
                    width="28"
                    height="28"
                    src="/content/img/flags/Russia.svg"
                    className="flag-lang"
                    alt=""
                    role="presentation"
                  />
                  <span>Русский</span>
                  <img
                    src="/content/img/Arrow.svg"
                    width="16"
                    height="16"
                    className="toggle-icon"
                    alt="Arrow down"
                  />
                </button>

                <ul
                  className={`choose-lang-list ${isLangDropdownOpen ? 'show' : ''}`}
                  role="listbox"
                  aria-label="Список языков"
                >
                  {languages.map((lang, index) => (
                    <li key={index}>
                      <a
                        className="choose-lang-box"
                        href="ipc.html"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        role="option"
                      >
                        <img
                          loading="lazy"
                          width="36"
                          height="36"
                          className="flag-lang lazyloaded"
                          src={lang.flag}
                          alt=""
                          role="presentation"
                        />
                        <span>{lang.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
