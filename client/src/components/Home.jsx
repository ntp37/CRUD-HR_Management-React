import ImgHome from "../images/employee.jpg";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full font-OpenSans bg-slate-100">
        <Navbar />
        <div className="flex pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent flex flex-col max-w-7xl mx-auto p-10">
              <h1 className="font-semibold text-2xl sm:text-4xl text-start">
                Welcome to Employee Management
              </h1>
              <div className="leading-relaxed my-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, fuga
                  ipsa cum reiciendis amet nostrum vel reprehenderit necessitatibus
                  tempora architecto Voluptatem ipsa deserunt ad tempora doloribus ullam
                  quos quaerat adipisci quo, sed quod voluptas, maxime porro recusandae.
                  Illum quos commodi necessitatibus cupiditate! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Eum at accusamus, culpa, ad fugiat
                  non temporibus nam quisquam molestiae quae quibusdam alias assumenda
                  numquam. Delectus accusantium repellendus ad quia nulla. Vitae soluta
                  iusto veniam cumque natus minima, omnis reiciendis deserunt?
                </p>
              </div>
              <div className="md:w-2/3 lg:w-2/4 h-auto my-5">
                <img src={ImgHome} alt="imageHome" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
