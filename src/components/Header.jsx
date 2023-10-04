const Header = () => {
  return (
    <header className="hidden max-w-[60em] mx-auto mt-2 p-4 md:p-6 md:flex items-center justify-between">
      <a href="/">
        <h1 className="text-xl font-syne font-extrabold uppercase">
          Geoff Jamieson
        </h1>
      </a>
      {/* Navigation for tablet & desktop */}
      <nav>
        <ul className="hidden md:flex space-x-8">
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
