interface TypeLoader{
  wh?: string,
  isOpen: boolean,
  fSize?:string,
}

function Loader({ wh, isOpen, fSize }: TypeLoader) {
  return (
    <div className="my-20 md:my-28">
      <div
        className={`${isOpen ? 'inline-block' : 'hidden'} box-border text-pink-400 relative`}
        style={{
          animation: 'mulShdSpin 1.3s linear infinite',
          borderRadius: '50%',
          width: wh,
          height: wh,
          fontSize: fSize,
        }}
      />
    </div>
  );
}

Loader.defaultProps = {
  wh: '10px',
  fSize: '12px',
};

export default Loader;
