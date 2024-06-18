import Navbar from "./components/Navbar/Navbar";
import GetStartedCard from "./components/Cards/GetStartedCard";
import TrendingCard from "./components/Cards/TrendingCard";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Team from "./components/Team/Team";
import Currencies from "./components/Carousel/Currencies";
import Sentiment from "./components/Sentiment/Sentiment";
import Btc from "./components/Btc/Btc";
import Performance from "./components/Overview/Performance";
function App() {
  return (
    <div className="min-h-screen w-full  ">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <main className="mx-auto w-full  ">
        <div className="bg-[#EFF2F5] px-[1.5rem] pb-4 sm:px-[3.5rem]">
          <div className="mx-auto max-w-[83rem]">
            <p className="py-4 text-[.88rem] font-normal text-[#334155]">
              Cryptocurrencies &gt;&gt;
              <span className="font-medium text-[#1E293B]">Bitcoin</span>
            </p>
            {/* crypto cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {/* Column 1  */}
              <div className="col-span-2 space-y-5 text-xl">
                <Btc />
                <Performance />
                <Sentiment />
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
          </div>
        </div>
        {/* Last section - you may also like */}
        <section className="order-1 mt-6 bg-white px-[1.5rem] py-16 sm:mt-20 sm:px-[3.5rem]">
          <div className="mx-auto max-w-[83rem]">
            <Currencies heading={"You may also like"} />
            <Currencies heading={"Trending Coins"} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
