import TradingViewWidget from "../Ui/TradingViewWidget";
import btcLogo from "../../images/btc.png";
import { useState, useEffect } from "react";
import { formatINRCurrency } from "../../utils/formatINRcurrency";
import { formatUSCurrency } from "../../utils/formatUScurrency";
const Btc = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
        );
        const data = await response.json();
        if (response.ok) {
          //console.log(data);
          setData(data.bitcoin);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="rounded-lg bg-white p-6">
      {loading || error ? (
        <div className="flex h-32 animate-pulse items-center justify-center">
          {error ? "Something went wrong" : "Loading..."}
        </div>
      ) : (
        <div>
          <div className="flex items-center">
            <div>
              <img src={btcLogo} className="w-9" alt="Bitcoin" />
            </div>
            <div className="pl-2 text-2xl font-semibold text-[#0B1426]">
              Bitcoin
            </div>
            <div className="pl-2 text-sm text-[#5D667B]">BTC</div>
            <div className="ml-7 rounded-lg bg-[#808A9D] px-3 py-2 text-white">
              Rank #1
            </div>
          </div>
          <div className="mt-8 flex">
            <div>
              <div className="text-3xl font-semibold text-[#0B1426]">
                {data && `${formatUSCurrency(data.usd)}`}
              </div>
              <div className="text-lg font-medium text-[#0B1426]">
                {data && `${formatINRCurrency(data.inr)}`}
              </div>
            </div>
            <div
              className={`ml-10 flex h-10 items-center justify-center rounded-lg p-2 ${
                data && data.inr_24h_change < 0
                  ? "bg-red-300/20"
                  : "bg-green-300/20"
              }`}
            >
              <svg
                viewBox="0 0 100 100"
                className={`w-4 fill-current ${
                  data && data.inr_24h_change < 0
                    ? "rotate-180 text-red-600"
                    : "text-green-600"
                }`}
              >
                <polygon points="0,100 50,0 100,100" />
              </svg>
              <span
                className={`ml-2 text-sm font-bold ${
                  data && data.inr_24h_change < 0
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {data && `${Math.abs(data.inr_24h_change).toFixed(2)}%`}
              </span>
            </div>

            <div className="ml-2 mt-2 text-sm text-[#768396]">(24H)</div>
          </div>
        </div>
      )}
      <div className="h-[300px] lg:h-[420px]">
        <TradingViewWidget />
      </div>
    </section>
  );
};

export default Btc;
