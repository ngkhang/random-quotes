interface TypeLoader{
  wh?: string,
  isOpen: boolean,
  fSize?:string,
}

function Loader({ wh, isOpen, fSize }: TypeLoader) {
  return (
    <div
      className={`${isOpen ? 'inline-block' : 'hidden'} box-border text-[#FF3D00] relative`}
      style={{
        animation: 'mulShdSpin 1.3s linear infinite',
        borderRadius: '50%',
        width: wh,
        height: wh,
        fontSize: fSize,
      }}
    />
  );
}

Loader.defaultProps = {
  wh: '10px',
  fSize: '12px',
};

export default Loader;
