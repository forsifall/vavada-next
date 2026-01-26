'use client';

export default function CategoryNavigation() {
  return (
    <div className="navigation">
      <nav className="navigation-menu" aria-label="Игровые категории">
        <a
          className="menu-item"
          href="ipc.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            alt="menu-item"
            height="32"
            src="/content/img/menu-icons/Slot.svg"
            title="menu-item"
            width="32"
            loading="lazy"
          />
          <span className="menu-item-text">Slots</span>
        </a>
        <a
          className="menu-item"
          href="ipc.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            alt="menu-item"
            height="32"
            src="/content/img/menu-icons/sport.svg"
            title="menu-item"
            width="32"
            loading="lazy"
          />
          <span className="menu-item-text">Sports</span>
        </a>
        <a
          className="menu-item"
          href="ipc.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            alt="menu-item"
            height="32"
            src="/content/img/menu-icons/Live.svg"
            title="menu-item"
            width="32"
            loading="lazy"
          />
          <span className="menu-item-text">Live</span>
        </a>
        <a
          className="menu-item"
          href="ipc.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            alt="menu-item"
            height="32"
            src="/content/img/menu-icons/Table.svg"
            title="menu-item"
            width="32"
            loading="lazy"
          />
          <span className="menu-item-text">Table</span>
        </a>
        <a
          className="menu-item"
          href="ipc.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            alt="menu-item"
            height="32"
            src="/content/img/menu-icons/Tournaments.svg"
            title="menu-item"
            width="32"
            loading="lazy"
          />
          <span className="menu-item-text">Tournaments</span>
        </a>
      </nav>
    </div>
  );
}
