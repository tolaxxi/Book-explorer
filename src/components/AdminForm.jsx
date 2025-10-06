const AdminForm = () => {
  return (
    <form className="border border-zinc-300 px-3 py-12 w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] rounded-3xl flex flex-col">
      <p className="text-lg mb-3">Add New Book</p>

      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Author *</p>
        <input type="text" required placeholder="Enter author name" />
      </div>
      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Title *</p>
        <input type="text" required placeholder="Enter Book title" />
      </div>
      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Cover Image </p>
        <input type="text" required placeholder="Enter Cover image Url" />
      </div>
      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Genre *</p>
        <select
          type=""
          required
          placeholder="select genre"
          className="w-full border border-zinc-300 py-1 text-zinc-500 rounded-md px-2"
        >
          <option value="fantasy">fantasy</option>
          <option value="fantasy">fantasy</option>
          <option value="adventure">adventure</option>
        </select>
      </div>

      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Published Year </p>
        <input type="text" required placeholder="e.g.,2025" />
      </div>
      <div className="mb-6 w-full">
        <p className="text-sm mb-1">rating </p>
        <input type="text" required placeholder="e.g.,4.5" />
      </div>
      <div className="mb-6 w-full">
        <p className="text-sm mb-1">Summary </p>
        <textarea
          name=""
          id=""
          placeholder="Enter book summary..."
          className="border-zinc-300 py-1 text-zinc-500 rounded-md px-2 w-full border h-30"
        ></textarea>
      </div>
      <button type="submit" className="bg-indigo-500 w-full mb-2 py-2 text-white rounded-md my-1 px-2.5">
        Add Book to collection
      </button>
    </form>
  );
};
export default AdminForm;
