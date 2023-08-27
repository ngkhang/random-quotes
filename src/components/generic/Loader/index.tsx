function Loader({ size = '40px' }: { size: string }) {
  return (
    <div
      className="inline-block box-border rounded-1/2"
      style={{
        animation: 'rotation 1s linear infinite', width: size, height: size, border: '5px solid #FFF', borderBottomColor: '#FF3D00', borderRadius: '50%',
      }}
    />
  );
}

export default Loader;
