import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-800 h-[65px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-white text-2xl font-normal">
              <Link to={'/'}><h3 className="">Home</h3></Link>
              <div className="ml-6 sm:block max-[330px]:ml-1">
                <Link to={'/about-me'}><h4 className="inline-block mr-5 max-[330px]:mr-3">About me</h4></Link>
                 <Link to={'/project'}><h4 className="inline-block mr-7 max-[330px]:mr-3">Project</h4></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;