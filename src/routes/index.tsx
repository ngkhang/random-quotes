import AuthorPage from '~/pages/AuthorPage';
import Authors from '~/pages/Authors';
import HomePage from '~/pages/Home';

const PublicRoutes = [
  {
    id: 1,
    path: '/',
    component: HomePage,
  },
  {
    id: 2,
    path: '/authors',
    component: Authors,
  },
  {
    id: 3,
    path: '/author/:slugAuthor',
    component: AuthorPage,
  },

];

export default PublicRoutes;
