import Header from "./Header";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <>
      <div className="navbar fixed flex left-0 right-0 top-0 z-10 overflow-hidden bottom-auto justify-start items-stretch" key={"navbar"}>
        <div className="mx-auto max-w-4xl text-slate-50">
          <div className="hidden lg:flex flex-row w-72 justify-center items-center bg-blue-600">
            <div className="text-center p-4">
              <h1 className="text-2xl font-semibold">HR Admin</h1>
            </div>
          </div>
          <nav className="hidden lg:flex flex-col shadow-xl bg-blue-600 mt-12 overflow-hidden float-none right-auto bottom-0 w-72 h-screen fixed left-0 top-0 pt-5 pb-3 justify-between">
            <div className="font-medium px-0 flex-1 overflow-hidden">
              <NavItem />
            </div>
          </nav>
        </div>
        <Header />
      </div>
    </>
  );
}
