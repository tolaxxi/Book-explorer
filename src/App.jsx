import NavBar from './components/NavBar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import RootLayouts from './Layouts/RootLayouts.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <RootLayouts />, children: [{ path: 'login', element: <Login /> }] },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
