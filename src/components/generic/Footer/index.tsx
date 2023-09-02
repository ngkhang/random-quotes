function Footer() {
  return (
    <div className="text-center bg-black/80">
      <p className="italic text-sm md:text-base py-3 md:py-5 text-[#fafafa]/70">
        &copy;
        {` ${(new Date()).getFullYear()} by ngkhang`}
      </p>
    </div>
  );
}

export default Footer;
