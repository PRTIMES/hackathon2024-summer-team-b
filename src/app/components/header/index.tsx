export default function Header() {

  const handleSearch = async () => {

  }

  return (
    <header className="flex justify-between items-center shadow-2xl bg-primary backdrop-blur-sm py-2 text-primary-foreground text-sm fixed top-0 z-50 w-full">
      <div className="ml-16 my-6 text-center font-bold">
        <h1 className="text-2xl">strawberry</h1>
        <h1 className="text-2xl">carriers 🍓</h1>
      </div>
      <form className="flex mr-16">
        <div>
          <input 
          type="text"
          placeholder="｜キーワードを検索"
          className="h-14 w-96 p-3 text-black rounded-md border border-black"/>
        </div>
        <div className="flex items-center ml-5">
          <button className="bg-red-400 px-6 py-2 rounded shadow-2xl hover:bg-red-500">
            検索
          </button>
        </div>  
      </form>
    </header>
  );
}
