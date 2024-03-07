import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
function TrendingCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        const data = await response.json();
        if (response.ok) {
          setData(data.coins);
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
    <div className="space-y-6 rounded-lg bg-white p-6">
      <h1 className="text-2xl font-semibold">Trending Coins (24h)</h1>
      {/* Currencies container*/}
      <div className="space-y-5">
        {loading === false && data ? (
          data?.slice(0, 3).map((currency) => (
            <div
              className="flex items-center justify-between"
              key={currency.item.id}
            >
              <div className="flex items-center gap-1">
                <img
                  className="h-[26px] w-[26px] rounded-full"
                  src={currency.item.thumb}
                  alt={currency.item.name}
                />
                <h2>
                  {currency.item.name}({currency.item.symbol})
                </h2>
              </div>
              <div
                className={`flex items-center gap-[4px] rounded  px-2 py-1 font-medium  ${currency.item.data.price_change_percentage_24h.btc >= 0 ? "bg-[rgba(10,178,125,0.06)] text-[#32BE88]" : "bg-[rgba(238,103,85,0.1)] text-[#E96975]"}`}
              >
                {currency.item.data.price_change_percentage_24h.btc >= 0 ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
                <span>
                  {currency.item.data.price_change_percentage_24h.btc.toFixed(
                    2,
                  )}
                  %
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TrendingCard;
