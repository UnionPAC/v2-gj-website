const Header = () => {
  return (
    <header>
      <a href="/">
        <h1 className="text-2xl font-syne font-extrabold uppercase">
          Geoff Jamieson
        </h1>
      </a>
      {/* Navigation for tablet & desktop */}
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
