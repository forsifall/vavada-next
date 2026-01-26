'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLangDropdownOpen) {
        const langContainer = document.querySelector('.footer-lang');
        if (langContainer && !langContainer.contains(e.target)) {
          setIsLangDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangDropdownOpen]);

  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
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
    <footer className="footer">
      <div className="footer-first-part">
        <div className="footer-content-first-part">
          <nav className="footer-nav" aria-label="Дополнительная навигация в подвале">
            <a href="ipc.html" className="footer-nav-item" target="_blank" rel="noopener noreferrer nofollow">
              Слоты
            </a>
            <a href="ipc.html" className="footer-nav-item" target="_blank" rel="noopener noreferrer nofollow">
              Live
            </a>
            <a href="ipc.html" className="footer-nav-item" target="_blank" rel="noopener noreferrer nofollow">
              Столы
            </a>
            <a href="ipc.html" className="footer-nav-item" target="_blank" rel="noopener noreferrer nofollow">
              Турниры
            </a>
            <a href="#soder" className="footer-nav-item">
              Содержание
            </a>
            <a href="#faq" className="footer-nav-item">
              FAQ
            </a>
          </nav>
          <div className="socials-and-apps-wrappper">
            <div className="apps-wrappper">
              <a
                href="https://vavadacom.app/install.html"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="app-item app-windows"
              >
                <div className="app-item-icon-and-text-wrapper">
                  <img
                    className="lazyloaded"
                    alt="windows"
                    title="windows"
                    width="28"
                    height="28"
                    src="/content/img/apps-icons/Windows.svg"
                    loading="lazy"
                  />
                  <div className="app-item-text-block">
                    <p className="app-item-text-title button-text-title">Приложение</p>
                    <p className="app-item-text-device button-text-title">для Windows</p>
                  </div>
                </div>
                <img
                  alt="icon"
                  src="/content/img/apps-icons/icon.svg"
                  loading="lazy"
                  width="16"
                  height="16"
                />
              </a>
              <a
                href="https://pwavavadacom.com/"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="app-item app-android"
              >
                <div className="app-item-icon-and-text-wrapper">
                  <img
                    className="lazyloaded"
                    alt="android"
                    title="android"
                    width="28"
                    height="28"
                    src="/content/img/apps-icons/Android.svg"
                    loading="lazy"
                  />
                  <div className="app-item-text-block">
                    <p className="app-item-text-title button-text-title">Приложение</p>
                    <p className="app-item-text-device button-text-title">для Android</p>
                  </div>
                </div>
                <img
                  alt="icon"
                  src="/content/img/apps-icons/icon.svg"
                  loading="lazy"
                  width="16"
                  height="16"
                />
              </a>
              <a
                href="https://vavada-ios-app.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="app-item app-ios"
              >
                <div className="app-item-icon-and-text-wrapper">
                  <img
                    className="lazyloaded"
                    alt="ios"
                    title="ios"
                    width="28"
                    height="28"
                    src="/content/img/apps-icons/IOS.svg"
                    loading="lazy"
                  />
                  <div className="app-item-text-block">
                    <p className="app-item-text-title button-text-title">Приложение</p>
                    <p className="app-item-text-device button-text-title">для IOS</p>
                  </div>
                </div>
                <img
                  alt="icon"
                  src="/content/img/apps-icons/icon.svg"
                  loading="lazy"
                  width="16"
                  height="16"
                />
              </a>
            </div>
            <div className="footer-social-btns-wrappper">
              <a
                className="footer-social-btn-instagram footer-social-btn"
                href="https://www.instagram.com/vavada.inst"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Vavada в Instagram"
              >
                <img
                  className="footer-social-btn-img lazyloaded"
                  alt="vavada instagram"
                  height="20"
                  src="/content/img/footer-social-icons/instagram.svg"
                  title="instagram"
                  width="21"
                  loading="lazy"
                />
              </a>
              <a
                className="footer-social-btn-vk footer-social-btn"
                href="https://vk.com/vavada_vkgroup"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Vavada в VK"
              >
                <img
                  className="footer-social-btn-img lazyloaded"
                  alt="vk vavada"
                  height="15"
                  src="/content/img/footer-social-icons/vk.svg"
                  title="vk"
                  width="22"
                  loading="lazy"
                />
              </a>
              <a
                className="footer-social-btn-x footer-social-btn"
                href="https://twitter.com/vavada_eu"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Vavada в X (бывший Twitter)"
              >
                <img
                  className="footer-social-btn-img lazyloaded"
                  alt="x"
                  height="19"
                  src="/content/img/footer-social-icons/x.svg"
                  title="x vavada"
                  width="20"
                  loading="lazy"
                />
              </a>
              <a
                className="footer-social-btn-youtube footer-social-btn"
                href="https://youtube.com/@vavadaofficial"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Vavada на YouTube"
              >
                <img
                  className="footer-social-btn-img lazyloaded"
                  alt="youtube"
                  height="15"
                  src="/content/img/footer-social-icons/youtube.svg"
                  title="youtube"
                  width="22"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second-part">
        <div className="footer-content-second-part" style={{ paddingBottom: '24px', flexDirection: 'row' }}>
          <div className="footer-second-part-item">
            <img
              loading="lazy"
              className="footer-second-part-item-img lazyloaded"
              alt="copyright-emblem"
              height="40"
              src="/content/img/Copyright-emblem.svg"
              title="copyright-emblem"
              width="40"
            />
            <p className="footer-second-part-item-text">
              VAVADA.COM is owned and operated by Vavada com
            </p>
          </div>
          <div className="footer-second-part-item max-w-full">
            <img
              loading="lazy"
              className="footer-second-part-item-img lazyloaded"
              alt="18-plus"
              height="40"
              src="/content/img/18-plus.svg"
              title="18 plus"
              width="40"
            />
            <p className="footer-second-part-item-text">
              Азартные игры призваны развлекать. Помните, что вы рискуете деньгами, когда делаете ставки. Не тратьте
              больше, чем можете позволить себе проиграть.
            </p>
          </div>

          <div className="footer-lang">
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
                  loading="lazy"
                  width="36"
                  height="36"
                  src="/content/img/flags/Russia.svg"
                  className="flag-lang lazyloaded"
                  alt=""
                  role="presentation"
                />
                <span>Русский</span>
                <img
                  loading="lazy"
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
                <li className="choose-lang-box choose-lang-box-first" role="option" aria-selected="true">
                  <img
                    loading="lazy"
                    width="36"
                    height="36"
                    className="flag-lang lazyloaded"
                    src="/content/img/flags/Russia.svg"
                    alt="Русский"
                  />
                  <span>Русский</span>
                  <img
                    loading="lazy"
                    src="/content/img/Arrow.svg"
                    width="16"
                    height="16"
                    className="toggle-icon lazyloaded"
                    alt="Arrow down"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
