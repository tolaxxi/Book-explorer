const BookSearch = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-medium text-3xl ">Book Collection</h2>
        <p className="text-sm text-zinc-500">Discover your next favorite book from our curated collection</p>
      </div>
      <div className="text-sm">
        <input type="text" placeholder="Search by title,author,genre" />
      </div>
    </section>
  );
};
export default BookSearch;
