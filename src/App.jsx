// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home';
import People from './pages/People';
import Expertise from './pages/Expertise';
import Insights from './pages/Insights';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/expertise',
    element: <Expertise />,
  },
  {
    path: '/insights',
    element: <Insights />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
