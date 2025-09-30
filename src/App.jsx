import NavBar from './components/NavBar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import RootLayouts from './Layouts/RootLayouts.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Books from './pages/Books.jsx';
import Error from './pages/Error.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayouts />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'books', element: <Books /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <Error /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
