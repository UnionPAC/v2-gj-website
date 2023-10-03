const Header = () => {
  return (
    <header className="w-[90%] mx-auto flex justify-between items-center p-4">
      <a href="/">
        <h1 className="text-2xl font-syne font-extrabold uppercase tracking-wide max-w-[200px]">
          Geoff Jamieson
        </h1>
      </a>
      {/* Navigation for tablet & desktop */}
      <nav className="hidden md:flex">
        <ul className="flex md:space-x-8 lg:space-x-12">
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
