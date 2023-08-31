function Footer() {
  return (
    <div className="text-center bg-black/80">
      <p className="italic text-sm py-3 text-[#fafafa]/70">
        &copy;
        {` ${(new Date()).getFullYear()} by ngkhang`}
      </p>
    </div>
  );
}

export default Footer;
