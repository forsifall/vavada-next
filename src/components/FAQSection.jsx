'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const FAQ_ITEMS_PER_PAGE = 4;

const faqData = [
  {
    id: 1,
    question: 'Как найти рабочее зеркало Vavada на сегодня?',
    answer: 'Актуальное зеркало можно получить через: Официальный Telegram-канал (ссылка в закрепе), Email-рассылку казино, Службу поддержки (онлайн-чат), Проверенные партнёрские сайты',
  },
  {
    id: 2,
    question: 'Безопасно ли играть в казино Вавада?',
    answer: 'Да, казино работает по лицензии Кюрасао №8048/JAZ2017-035 с 2017 года. За 8 лет не было зафиксировано ни одного случая невыплаты выигрышей. Все данные защищены SSL-шифрованием.',
  },
  {
    id: 3,
    question: 'Как получить 100 бесплатных вращений?',
    answer: 'Фриспины начисляются автоматически сразу после регистрации. Просто создайте аккаунт, подтвердите email или телефон, и откройте слот The Dog House или The Great Pigsby Megaways.',
  },
  {
    id: 4,
    question: 'Нужна ли верификация для игры?',
    answer: 'Нет, играть можно без верификации. Однако подтверждение личности потребуется при выводе от $1,000 или по запросу службы безопасности.',
  },
  {
    id: 5,
    question: 'Как долго выводятся деньги?',
    answer: 'Обработка заявок на вывод занимает от 15 минут до 24 часов в зависимости от выбранного метода и VIP-статуса. Криптовалюта выводится быстрее всего (5-30 минут).',
  },
  {
    id: 6,
    question: 'Какой минимальный депозит?',
    answer: 'Минимальная сумма пополнения — от 50 рублей или 1 доллар (зависит от метода).',
  },
  {
    id: 7,
    question: 'Есть ли комиссии на вывод?',
    answer: 'Казино не берёт комиссий. Однако платёжная система или банк могут взимать свои сборы (обычно 1-3%).',
  },
  {
    id: 8,
    question: 'Что делать, если не приходит письмо для подтверждения регистрации?',
    answer: 'Проверьте папку "Спам". Если письма нет, запросите повторную отправку в личном кабинете (раздел "Профиль") или обратитесь в службу поддержки.',
  },
];

export default function FAQSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openItems, setOpenItems] = useState(new Set());
  const totalPages = Math.ceil(faqData.length / FAQ_ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * FAQ_ITEMS_PER_PAGE;
  const endIndex = startIndex + FAQ_ITEMS_PER_PAGE;
  const visibleItems = faqData.slice(startIndex, endIndex);

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOpenItems(new Set());
      setTimeout(() => {
        const faqSection = document.querySelector('.faq .h2-base-title');
        if (faqSection) {
          const top = faqSection.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOpenItems(new Set());
      setTimeout(() => {
        const faqSection = document.querySelector('.faq .h2-base-title');
        if (faqSection) {
          const top = faqSection.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    setOpenItems(new Set());
  }, [currentPage]);

  return (
    <div className="faq">
      <h2 id="faq" className="h2-base-title">FAQ</h2>
      <div className="faq-content" itemScope itemType="https://schema.org/FAQPage">
        {visibleItems.map((item) => {
          const isOpen = openItems.has(item.id);
          return (
            <div
              key={item.id}
              className="faq-item base-gradient-border"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{ display: 'block' }}
            >
              <button
                type="button"
                className="faq-item-header-wrapper"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${item.id}`}
                aria-label="Переключить ответ на вопрос"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="faq-item-title highlighted-block" itemProp="name">
                  {item.question}
                </h3>
                <Image
                  loading="lazy"
                  width={16}
                  height={16}
                  className={`toggle-icon ${isOpen ? 'rotate-180' : ''}`}
                  src="/content/img/Arrow.svg"
                  alt="arrow"
                  title="arrow"
                />
              </button>
              <div
                className="faq-item-content"
                id={`faq-content-${item.id}`}
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div
                    className={`faq-item-content-hidden ${isOpen ? 'open' : ''} highlighted-block`}
                    itemProp="text"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="faq-pagination">
        <button
          className="faq-pagination-prev-button base-gradient-border"
          disabled={currentPage === 1}
          aria-label="Предыдущая страница FAQ"
          onClick={goToPrevious}
        >
          <Image
            loading="lazy"
            width={16}
            height={16}
            className="toggle-icon"
            src="/content/img/Arrow.svg"
            alt="arrow"
            title="arrow"
          />
        </button>
        <span className="faq-pagination-label" aria-live="polite">
          {currentPage}/{totalPages}
        </span>
        <button
          className="faq-pagination-next-button base-gradient-border"
          disabled={currentPage === totalPages}
          aria-label="Следующая страница FAQ"
          onClick={goToNext}
        >
          <Image
            loading="lazy"
            width={16}
            height={16}
            className="toggle-icon"
            src="/content/img/Arrow.svg"
            alt="arrow"
            title="arrow"
          />
        </button>
      </div>
    </div>
  );
}
