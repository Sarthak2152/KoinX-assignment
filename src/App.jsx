import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="min-h-screen bg-[#EFF2F5] ">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div className="mx-auto max-w-[83rem]">
        <p className=" py-4 text-[.88rem] font-normal text-[#334155]">
          Cryptocurrencies &gt;&gt;
          <span className="font-medium text-[#1E293B]">Bitcoin</span>
        </p>
        {/* crypto cards */}
        <div className="grid grid-cols-3 gap-2">
          {/* Column 1  */}
          <div className="col-span-2 text-xl"></div>
          {/* Column 2 */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;
