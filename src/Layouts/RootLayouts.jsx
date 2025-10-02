import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

const RootLayouts = () => {
  return (
    <div className='w-full'>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default RootLayouts;
