import { NavLink } from 'react-router-dom';

function PageNotPound() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="font-bold m-0 mb-10">Page Not Pound</h1>
      <div className="md:w-1/2 box-border mx-10 md:mx-0 p-10 bg-blue-100 rounded-xl">
        <p className="mb-10 text-lg md:text-xl">
          Check that you typed the address correctly,
          go back to your previous page or try using our site search to find something specific.
        </p>
        <NavLink to="/" className="px-10 py-2 md:px-20 md:py-3 rounded-lg inline-block bg-white shadow-lg hover:bg-white/70 hover:text-black/60">Back to Home</NavLink>
      </div>
    </div>
  );
}

export default PageNotPound;
