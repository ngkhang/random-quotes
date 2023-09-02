import { Link, NavLink } from 'react-router-dom';
import Icons from '~/utils/helpers/icons';

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
  social: [
    {
      id: 1,
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/ngkhang0220/',
    },
  ],
};

function Header() {
  return (
    <div className="flex justify-center shadow-md shadow-slate-200 bg-white fixed z-10 w-full px-2">
      <div className="w-full md:w-mainSize flex justify-between items-center">
        <Link to="/" className="text-xs md:text-sm">
          {dataPage.name}
        </Link>
        <div className="flex items-center">
          {
            dataPage.nav.map((ele) => {
              return <NavLink to={ele.url} key={ele.id} className="px-3 py-2 uppercase text-sm border-b-4 border-b-transparent">{ele.name}</NavLink>;
            })
          }
          {
            dataPage.social.map((ele) => {
              return (
                <a className="text-lg px-3 py-2 inline-block text-blue-600" target="_blank" rel="noreferrer" key={ele.id} href={ele.url}>{Icons[ele.icon]()}</a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
