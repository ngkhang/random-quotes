function Footer() {
  return (
    <div className="text-center bg-black/20">
      <p className="italic text-sm py-3">
        &copy;
        {` ${(new Date()).getFullYear()} by ngkhang`}
      </p>
    </div>
  );
}

export default Footer;
