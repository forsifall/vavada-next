'use client';

import TableOfContents from './TableOfContents';
import GamesSection from './GamesSection';
import ContentArticles from './ContentArticles';
import Games247Section from './Games247Section';
import FAQSection from './FAQSection';

export default function MainContentSection() {
  return (
    <div className="base-block">
      <div className="text-block-second">
        <div className="text-block-second-content">
          <h1 className="text-block-second-title h2-base-title">
            VAVADA CASINO Официальный Сайт
          </h1>
          <div className="text-block-second-content-visible text-block-second-content">
            <p>
              Онлайн-казино Vavada — это лицензированная игровая платформа, которая с 2017 года предоставляет качественные азартные развлечения игрокам из более чем 40 стран мира. За восемь лет работы заведение обзавелось аудиторией свыше 2 миллионов пользователей, что подтверждает его надёжность и популярность в индустрии онлайн-гемблинга.
            </p>
            <p>
              Компания работает на основании официальной лицензии <strong>Кюрасао №8048/JAZ2017-035</strong>, что гарантирует честность игрового процесса, прозрачность финансовых операций и защиту персональных данных клиентов. За всё время функционирования казино не было зафиксировано ни одного случая невыплаты выигрышей, что является важнейшим показателем надёжности оператора.
            </p>
          </div>
        </div>
        <a
          href="ipc.html"
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="custom-button"
        >
          Вавада зеркало
        </a>
      </div>

      <TableOfContents />
      <GamesSection />
      <ContentArticles />
      <Games247Section />
      <FAQSection />
    </div>
  );
}
