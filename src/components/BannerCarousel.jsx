'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerCarousel() {
  const swiperRef = useRef(null);

  const banners = [
    {
      desktop: '/content/img/banners/Banners.webp',
      mobile: '/content/img/banners/mobile.webp',
      priority: true,
      mobileMedia: '(min-width: 320px)',
    },
    {
      desktop: '/content/img/banners/Banners-1.webp',
      mobile: '/content/img/banners/mobile1.webp',
      priority: false,
      mobileMedia: '(min-width: 320px)',
    },
    {
      desktop: '/content/img/banners/Banners-2.webp',
      mobile: '/content/img/banners/mobile2.webp',
      priority: false,
      mobileMedia: '(min-width: 320px)',
    },
    {
      desktop: '/content/img/banners/Banners-3.webp',
      mobile: '/content/img/banners/mobile3.webp',
      priority: false,
      mobileMedia: '(min-width: 320px)',
    },
    {
      desktop: '/content/img/banners/Banners-4.webp',
      mobile: '/content/img/banners/mobile4.webp',
      priority: false,
      mobileMedia: '(max-width: 639px)',
    },
    {
      desktop: '/content/img/banners/Banners-5.webp',
      mobile: '/content/img/banners/mobile5.webp',
      priority: false,
      mobileMedia: '(max-width: 639px)',
    },
    {
      desktop: '/content/img/banners/Banners-6.webp',
      mobile: '/content/img/banners/mobile6.webp',
      priority: false,
      mobileMedia: '(max-width: 639px)',
    },
    {
      desktop: '/content/img/banners/Banners-7.webp',
      mobile: '/content/img/banners/mobile7.webp',
      priority: false,
      mobileMedia: '(max-width: 639px)',
    },
  ];

  return (
    <div className="banner-wrapper">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, A11y]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        a11y={{
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
          paginationBulletMessage: 'Перейти к слайду {{index}}',
        }}
        className="swiper-container"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a
              href="https://vavada-ios-app.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <div className="banner">
                <picture>
                  <source
                    media="(min-width: 640px)"
                    srcSet={banner.desktop}
                  />
                  <source
                    media={banner.mobileMedia}
                    srcSet={banner.mobile}
                  />
                  <img
                    fetchPriority={banner.priority ? 'high' : 'auto'}
                    loading={banner.priority ? undefined : 'lazy'}
                    width="360"
                    height="120"
                    className="banner-img"
                    src={banner.mobile}
                    alt="турнир онлайн казино вавада"
                    title="турниры онлайн казино вавада"
                  />
                </picture>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
