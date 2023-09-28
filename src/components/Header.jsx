const Header = () => {
  return (
    <header className="w-[90%] mx-auto flex justify-between py-6">
        <a href="/">
          <h1>Geoff Jamieson</h1>
        </a>
        <nav className="space-x-10">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
    </header>
  );
};

export default Header;
