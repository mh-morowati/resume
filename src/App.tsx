import { FaUser } from "react-icons/fa6";


function App() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

              <div className="hidden sm:ml-6 sm:block">

              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">

        </div>
      </nav>

      <div>
      <FaUser className="w-96 h-96 text-zinc-200 absolute right-1 bottom-36"/>
        <h1 className="text-5xl text-slate-950 bottom-64 absolute left-20">Hi. i'm Muhammad</h1>
      </div>
    </div>
  );
}

export default App;
