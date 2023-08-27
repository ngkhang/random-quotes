import { Link, NavLink } from 'react-router-dom';

const dataPage = {
  name: 'Inspriational',
  nav: [
    {
      id: 1,
      name: 'home',
      url: '/',
    },
    {
      id: 2,
      name: 'authors',
      url: '/authors',
    },
  ],
};

function Header() {
  return (
    <div className="flex justify-center bg-slate-200 fixed z-10 w-full px-2">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="text-xs">
          {dataPage.name}
        </Link>
        <div className="flex items-center">
          {
            dataPage.nav.map((ele) => {
              return <NavLink to={ele.url} key={ele.id} className="px-3 py-2 uppercase text-base">{ele.name}</NavLink>;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
