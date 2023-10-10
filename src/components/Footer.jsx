const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-w-[60em] mx-auto pb-12 flex flex-col md:flex-row justify-center md:justify-between px-6 items-center gap-8"
    >
      <div className="space-x-10">
        <a href="https://github.com/UnionPAC">
          <i className="fa-brands fa-github text-3xl text-slate-500 hover:text-white"></i>
        </a>
        <a href="https://www.linkedin.com/in/geoffjamieson/">
          <i className="fa-brands fa-linkedin text-3xl text-slate-500 hover:text-white"></i>
        </a>
        <a href="https://twitter.com/unionpac_">
          <i className="fa-brands fa-twitter text-3xl text-slate-500 hover:text-white"></i>
        </a>
      </div>
      <div>
        <h6 className="text-sm">Made with 🪄 by Geoff Jamieson</h6>
      </div>
    </footer>
  );
};

export default Footer;
