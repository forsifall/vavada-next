'use client';

import { useEffect, useRef } from 'react';

export default function GamesSection() {
  const panelRef = useRef(null);
  const blockBigRef = useRef(null);

  useEffect(() => {
    // загрузка игр через AJAX
    const loadHTML = async (selector, url) => {
      const el = document.querySelector(selector);
      if (!el) {
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          return;
        }
        const html = await response.text();
        el.innerHTML = html;
      } catch (error) {
        // тихо игнорируем ошибки загрузки
      }
    };

    // загрузка игровых панелей
    loadHTML('#panel', '/noindex/panel.html.js');
    loadHTML('#block_big', '/noindex/gameBig.html.js');
  }, []);

  return (
    <div className="games-section">
      <div id="panel" ref={panelRef}></div>
      <div id="block_big" ref={blockBigRef}></div>
    </div>
  );
}
