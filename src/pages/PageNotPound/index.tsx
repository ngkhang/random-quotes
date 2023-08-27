import { NavLink } from 'react-router-dom';

function PageNotPound() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen bg-white">
      <h2 className="font-bold text-3xl mb-10">Page Not Pound</h2>
      <div className="box-border w-3/4 p-10 bg-blue-100 rounded-lg">
        <p className="mb-10 text-lg">
          Check that you typed the address correctly,
          go back to your previous page or try using our site search to find something specific.
        </p>
        <NavLink to="/" className="px-10 py-2 rounded-md inline-block bg-white shadow-lg hover:bg-white/70 hover:text-black/60">Back to Home</NavLink>
      </div>
    </div>
  );
}

export default PageNotPound;
