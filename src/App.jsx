import NavBar from './components/NavBar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import RootLayouts from './Layouts/RootLayouts.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Books from './pages/Books.jsx';
import Error from './pages/Error.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import {AuthContextProvider} from './context/authContext/AuthContextProvider.jsx';

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

        {
          path: 'admin',
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          ),
        },
        { path: '*', element: <Error /> },
      ],
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};
export default App;
