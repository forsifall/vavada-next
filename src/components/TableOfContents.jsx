'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  const contents = [
    { id: 'pochemu-vavada-casino-vybirayut-milliony-igrokov', title: 'Почему Vavada Casino выбирают миллионы игроков?' },
    { id: 'vavada-zerkalo-kak-poluchit-dostup-k-saytu-v-2025', title: 'Вавада Зеркало: Как Получить Доступ к Сайту в 2025' },
    { id: 'vavada-registratsiya-bystroe-sozdanie-akkaunta', title: 'Vavada Регистрация: Быстрое Создание Аккаунта' },
    { id: 'vavada-bonusy-polnyy-obzor-aktsiy-i-promokodov', title: 'Вавада Бонусы: Полный Обзор Акций и Промокодов' },
    { id: 'vavada-igrovye-avtomaty-katalog-iz-6000-slotov', title: 'Вавада Игровые Автоматы: Каталог Из 6000+ Слотов' },
    { id: 'vavada-stavki-na-sport-bukmekerskaya-kontora', title: 'Вавада Ставки на Спорт: Букмекерская Контора' },
    { id: 'vavada-popolnenie-i-vyvod-sredstv', title: 'Вавада Пополнение и Вывод Средств' },
    { id: 'mobilnoe-prilozhenie-i-adaptivnaya-versiya', title: 'Мобильное Приложение и Адаптивная Версия' },
    { id: 'turniry-vavada-ezhenedelnye-sorevnovaniya', title: 'Турниры Vavada: Еженедельные Соревнования' },
    { id: 'tekhnicheskaya-podderzhka-pomoshch-247', title: 'Техническая Поддержка: Помощь 24/7' },
    { id: 'otvetstvennaya-igra-i-bezopasnost', title: 'Ответственная Игра и Безопасность' },
    { id: 'pochemu-stoit-vybrat-vavada-casino', title: 'Почему Стоит Выбрать Vavada Casino' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <div className="articles__block">
      <button
        type="button"
        className="articles__header-wrapper"
        aria-expanded={isOpen}
        aria-controls="articles-items-wrapper-id"
        aria-label="Переключить содержание"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span id="soder" className="articles-item-title">Содержание</span>
        <Image
          loading="lazy"
          width={16}
          height={16}
          alt="arrow"
          className={`toggle-icon ${isOpen ? 'open' : ''}`}
          src="/content/img/Arrow.svg"
        />
      </button>
      <div
        className={`articles__items-wrapper ${isOpen ? 'show' : ''}`}
        id="articles-items-wrapper-id"
      >
        {contents.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="articles-item">
            <span className="articles-item-title">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
