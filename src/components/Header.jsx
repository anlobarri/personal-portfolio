const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
        >
          <rect width="36" height="36" fill="#121212" rx="3" />
          <path
            fill="#fff"
            d="m4 24 3.528-11.7h3.744L14.8 24h-3.276l-1.314-5.688a84.196 84.196 0 0 0-.414-1.836c-.156-.66-.3-1.284-.432-1.872h-.072a142.125 142.125 0 0 1-.81 3.708L7.168 24H4Zm2.538-2.484v-2.394h5.688v2.394H6.538ZM14.721 24V12.3h3.096v9.108h4.986V24h-8.082Zm8.417 0V12.3h4.176c.816 0 1.554.084 2.214.252.672.168 1.2.462 1.584.882.396.42.594 1.014.594 1.782 0 .504-.162 1.008-.486 1.512-.312.492-.81.828-1.494 1.008v.072c.828.156 1.446.456 1.854.9.42.444.63 1.056.63 1.836 0 .804-.204 1.464-.612 1.98-.408.504-.954.876-1.638 1.116-.684.24-1.446.36-2.286.36h-4.536Zm3.096-7.092h1.008c.504 0 .87-.114 1.098-.342.228-.228.342-.522.342-.882s-.114-.618-.342-.774c-.228-.156-.594-.234-1.098-.234h-1.008v2.232Zm0 4.716h1.224c.612 0 1.05-.114 1.314-.342.276-.228.414-.558.414-.99 0-.432-.138-.744-.414-.936-.264-.192-.702-.288-1.314-.288h-1.224v2.556Z"
          />
        </svg>
      </a>
      <nav className="header__nav">
        <ul>
            <li><a href="" className="hvr-grow">Proyectos</a></li>
            <li><a href="">Experiencia</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
