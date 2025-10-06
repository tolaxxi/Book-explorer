import { BiSolidBookAdd } from 'react-icons/bi';
import AdminForm from '../components/AdminForm.jsx';

const Admin = () => {
  return (
    <section className=" flex w-full flex-col justify-start h-[80dvh] items-center pb-10 pt-5 gap-4">
      <div className="flex flex-col gap-3  w-full items-center justify-center">
        <span className="rounded-4xl p-4 text-indigo-800 bg-violet-300">
          <BiSolidBookAdd size={35} />
        </span>
        <div className="text-center">
          <h1 className="font-medium text-3xl mb-3">Admin Panel</h1>
          <p className="text-zinc-500"> Add new books to the collection</p>
        </div>
      </div>
      <AdminForm />
    </section>
  );
};
export default Admin;
