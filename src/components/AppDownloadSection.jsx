'use client';

export default function AppDownloadSection() {
  return (
    <>
      {/* десктопная версия */}
      <div className="prize-fund-wrapper prize-fund-desktop-section">
        <img
          className="desktop-rectangle"
          style={{ zIndex: 100 }}
          width="24"
          height="24"
          src="/content/img/prize-fund/Prize-fund-rectangle.svg"
          alt="vavada mob version"
          title="vavada mob version"
          loading="lazy"
        />
        <img
          className="tablet-rectangle"
          style={{ zIndex: 100 }}
          width="8"
          height="24"
          src="/content/img/prize-fund/Prize-fund-rectangle-tablet.svg"
          alt="vavada mob version"
          title="vavada mob version"
          loading="lazy"
        />
        <div className="prize-fund">
          <div className="banner-container">
            <picture>
              <source
                srcSet="/content/img/mini-banner/App_banner_desktop.webp"
                type="image/webp"
              />
              <img
                src="/content/img/mini-banner/App_banner_desktop.png"
                alt="Скачать приложение Вавада"
                fetchPriority="high"
                className="banner-container-bg"
              />
            </picture>
            <div className="banner-content">
              <span className="line1">Скачивай официальное</span>
              <span className="line2">Приложение Vavada</span>
            </div>
            <div className="button-container">
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://vavada-ios-app.com/"
                className="download-button ios"
              >
                <div className="icon">
                  <img
                    src="/content/img/mini-banner/IOS_icon.svg"
                    alt="iOS Icon"
                    loading="lazy"
                    width="30"
                    height="30"
                  />
                </div>
                <div className="text">
                  <span className="line1">Приложение</span>
                  <br />
                  <span className="line2">для iOS</span>
                </div>
                <div className="arrow">
                  <img
                    src="/content/img/mini-banner/Iconswap.svg"
                    alt="Arrow Icon"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://pwavavadacom.com/"
                className="download-button android"
              >
                <div className="icon">
                  <img
                    src="/content/img/mini-banner/Android_icon.svg"
                    alt="Android Icon"
                    loading="lazy"
                    width="30"
                    height="30"
                  />
                </div>
                <div className="text">
                  <span className="line1">Приложение</span>
                  <br />
                  <span className="line2">для Android</span>
                </div>
                <div className="arrow">
                  <img
                    src="/content/img/mini-banner/Iconswap.svg"
                    alt="Arrow Icon"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <img
          className="desktop-rectangle"
          style={{ zIndex: 100 }}
          width="24"
          height="24"
          src="/content/img/prize-fund/Prize-fund-rectangle.svg"
          alt="vavada site online"
          title="vavada offsite online casino"
          loading="lazy"
        />
        <img
          className="tablet-rectangle"
          style={{ zIndex: 100 }}
          width="8"
          height="24"
          src="/content/img/prize-fund/Prize-fund-rectangle-tablet.svg"
          alt="vavada site online"
          title="vavada offsite online casino"
          loading="lazy"
        />
      </div>

      {/* мобильная версия */}
      <div className="prize-fund-mobile-section">
        <div className="prize-fund-mobile-second-block">
          <div className="banner-container">
            <picture>
              <source
                srcSet="/content/img/mini-banner/App_banner_mobile.webp"
                type="image/webp"
              />
              <img
                src="/content/img/mini-banner/App_banner_mobile.png"
                alt="Скачать приложение Вавада"
                fetchPriority="high"
                className="banner-container-bg"
              />
            </picture>
            <div className="banner-content">
              <span className="line1">Скачивай официальное</span>
              <span className="line2">Приложение Vavada</span>
            </div>
            <div className="button-container">
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://vavada-ios-app.com"
                className="download-button ios"
              >
                <div className="icon">
                  <img
                    src="/content/img/mini-banner/IOS_icon.svg"
                    alt="iOS Icon"
                    width="30"
                    height="30"
                    loading="lazy"
                  />
                </div>
                <div className="text">
                  <span className="line1">Приложение</span>
                  <br />
                  <span className="line2">для iOS</span>
                </div>
                <div className="arrow">
                  <img
                    src="/content/img/mini-banner/Iconswap.svg"
                    alt="Arrow Icon"
                    width="15"
                    height="15"
                    loading="lazy"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://pwavavadacom.com"
                className="download-button android"
              >
                <div className="icon">
                  <img
                    src="/content/img/mini-banner/Android_icon.svg"
                    alt="Android Icon"
                    width="30"
                    height="30"
                    loading="lazy"
                  />
                </div>
                <div className="text">
                  <span className="line1">Приложение</span>
                  <br />
                  <span className="line2">для Android</span>
                </div>
                <div className="arrow">
                  <img
                    src="/content/img/mini-banner/Iconswap.svg"
                    alt="Arrow Icon"
                    width="15"
                    height="15"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
