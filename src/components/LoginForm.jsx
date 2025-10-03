const LoginForm = () => {
  return (
    <form className="border border-zinc-300 px-10 py-12 w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] rounded-3xl flex flex-col items-center">
      <p className="text-zinc-500 text-lg">Login</p>

      <div className="mb-6 w-full">
        <p className="text-sm text-zinc-500 mb-1">Username</p>
        <input type="text" required placeholder="Enter your username" />
      </div>

      <div className="mb-5 w-full">
        <p className="text-sm text-zinc-500 mb-1">password</p>
        <input type="text" required placeholder="Enter your password" />
      </div>

      <button type="submit" className="bg-indigo-500 w-full mb-2 py-2 text-white rounded-md my-1 px-2.5">
        Sign in
      </button>
      <div className="text-zinc-500 w-full text-center  bg-zinc-200 rounded-md sm:text-xs  px-2 py-2">
        <span className="font-medium text-black">Demo:</span> Use any username and password to login
      </div>
    </form>
  );
};
export default LoginForm;
