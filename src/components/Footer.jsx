const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-w-[60em] mx-auto pb-12 flex flex-col md:flex-row justify-center md:justify-between px-6 items-center gap-8"
    >
      <div className="space-x-10">
        <a href="">
          <i class="fa-brands fa-github text-3xl text-[#878787] hover:text-white"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin text-3xl text-[#878787] hover:text-white"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter text-3xl text-[#878787] hover:text-white"></i>
        </a>
      </div>
      <div>
        <h6 className="text-sm">Made with 🪄 by Geoff Jamieson</h6>
      </div>
    </footer>
  );
};

export default Footer;
