import { MdLogin } from 'react-icons/md';
import LoginForm from '../components/LoginForm.jsx';

const Login = () => {
  return (
    <section className=" flex w-full flex-col justify-start h-[80dvh] items-center pb-10 pt-5 gap-4">
      <div className="flex flex-col gap-3  w-full items-center justify-center">
        <span className="rounded-4xl p-4 text-indigo-800 bg-violet-300">
          <MdLogin size={35} />
        </span>
        <div className="text-center">
          <h1 className="font-medium text-3xl mb-3">Welcome Back</h1>
          <p className="text-zinc-500"> Sign in to access the admin panel</p>
        </div>
      </div>
      <LoginForm />
    </section>
  );
};
export default Login;
