import Navbar from "./components/Navbar/Navbar";
import GetStartedCard from "./components/Cards/GetStartedCard";
import TrendingCard from "./components/Cards/TrendingCard";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Team from "./components/Team/Team";
import Currencies from "./components/Carousel/Currencies";
function App() {
  return (
    <div className="min-h-screen bg-[#EFF2F5] ">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <main className="mx-auto  max-w-[83rem]">
        <p className=" py-4 text-[.88rem] font-normal text-[#334155]">
          Cryptocurrencies &gt;&gt;
          <span className="font-medium text-[#1E293B]">Bitcoin</span>
        </p>
        {/* crypto cards */}
        <div className="grid grid-cols-3 gap-5">
          {/* Column 1  */}
          <div className="col-span-2 space-y-5 text-xl">
            <About />
            <Tokenomics />
            <Team />
          </div>
          {/* Column 2 */}
          <div className="space-y-5">
            <GetStartedCard />
            <TrendingCard />
          </div>
        </div>
      </main>
      {/* Last section - you may also like */}
      <section className="mt-20 bg-white py-16">
        <div className="mx-auto max-w-[83rem]">
          <Currencies heading={"You may also like"} />
          <Currencies heading={"Trending Coins"} />
        </div>
      </section>
    </div>
  );
}

export default App;
