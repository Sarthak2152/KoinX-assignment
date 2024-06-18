import { IoMdInformationCircle } from "react-icons/io";

const Performance = () => {
  return (
    <>
      {/* Toggle section */}
      <div>
        <div className="flex space-x-7 overflow-x-auto py-4 text-sm font-medium text-[#3E424A] lg:space-x-10">
          <div className="border-b-4 border-[#0052FE] pb-4 text-[#0141CF]">
            Overview
          </div>
          <div>Fundamentals</div>
          <div>News Insights</div>
          <div>Sentiments</div>
          <div>Team</div>
          <div>Technicals</div>
          <div>Tokenomics</div>
        </div>
      </div>
      {/* Performance section */}
      <div className="mt-5 h-max rounded-lg bg-white p-6">
        <div>
          <div className="text-2xl font-semibold text-[#0F1629]">
            Performance
          </div>
          <div className="mt-2 py-4">
            <div className="flex justify-between ">
              <div className="text-start">
                <div className="p-1 text-sm font-normal text-[#44475B]">
                  Today&apos;s Low
                </div>
                <div className="p-1 text-lg font-medium text-[#44475B]">
                  46,930.22
                </div>
              </div>
              <div className="h-2 w-[500px]">
                <div className="mt-7 h-full rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>
                <div className="relative left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform">
                  <svg
                    viewBox="0 0 100 100"
                    className="ml-7 w-3 fill-current text-black"
                  >
                    <polygon points="0,100 50,0 100,100" />
                  </svg>
                  <span className="text-sm font-normal text-[#44475B]">
                    $47,137.83
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="p-1 text-sm font-normal text-[#44475B] ">
                  Today&apos;s High
                </div>
                <div className="p-1 text-lg font-medium text-[#44475B]">
                  49,343.83
                </div>
              </div>
            </div>
            <div className="mt-5 flex  justify-between">
              <div className="text-start">
                <div className="p-1 text-sm font-normal text-[#44475B]">
                  52W Low
                </div>
                <div className="p-1 text-lg font-medium text-[#44475B]">
                  16,930.22{" "}
                </div>
              </div>
              <div className="h-2 w-[500px]">
                <div className="mt-7 h-full rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>
              </div>
              <div className="text-end">
                <div className="p-1 text-sm font-normal text-[#44475B]">
                  52W High{" "}
                </div>
                <div className="p-1 text-lg font-medium text-[#44475B]">
                  49,743.83{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center">
              <div className="text-xl font-semibold text-[#44475B]">
                Fundamentals
              </div>
              <div className="">
                <IoMdInformationCircle className="ml-2 text-lg text-[#ABB9BF]" />
              </div>
            </div>
            <div className="mb-8 lg:flex">
              <div className="mr-10 mt-3 w-full lg:w-1/2  ">
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Bitcoin Price
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    $16,815.46
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    24h Low / 24h High{" "}
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    $16,382.07 / $16,874.12
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    7d Low / 7d High
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    $16,382.07 / $16,874.12
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Trading Volume
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    $23,249,202,782
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Market Cap Rank
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    #1
                  </div>
                </div>
              </div>
              <div className=" mt-3 w-full  lg:ml-10 lg:w-1/2">
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Market Cap
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    $323,507,290,047
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Market Cap Dominance
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    38.343%
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-[#D3E0E6] py-5">
                  <div className="text-sm font-semibold text-[#768396]">
                    Volume / Market Cap
                  </div>
                  <div className="mr-4 text-sm font-semibold text-[#111827]">
                    0.0718
                  </div>
                </div>
                <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                  <div className="text-sm font-semibold text-[#768396] ">
                    All-Time High
                  </div>
                  <div className="-p-2 mr-4 text-sm font-semibold text-[#111827]">
                    <div className="text-end">
                      $69,044.77 <span className="text-red-500">-75.6%</span>
                    </div>
                    <div className="text-xs font-normal">
                      Nov 10, 2021 (about 1 year)
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                  <div className="text-sm font-semibold text-[#768396]">
                    All-Time Low
                  </div>
                  <div className="-p-2 mr-4 text-sm font-semibold text-[#111827]">
                    <div className="text-end">
                      $67.81 <span className="text-green-500">24729.1%</span>
                    </div>
                    <div className="text-xs font-normal">
                      Jul 06, 2013 (over 9 years)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
