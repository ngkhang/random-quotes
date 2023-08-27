import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import PublicRoutes from './routes';
import PageNotPound from './pages/PageNotPound';

function App() {
  return (
    <Router>
      <Routes>
        {
          PublicRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={(
                <Layout.DefaultLayout>
                  <route.component />
                </Layout.DefaultLayout>
              )}
            />
          ))
        }
        <Route path="*" element={<PageNotPound />} />
      </Routes>
    </Router>
  );
}

export default App;
