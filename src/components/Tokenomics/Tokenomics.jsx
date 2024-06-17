import distributionImage from "../../images/distribution.svg";
function Tokenomics() {
  return (
    <section className="space-y-6 rounded-lg bg-white p-6">
      <h1 className="text-2xl font-semibold text-[#0F1629] ">Tokenomics</h1>
      <div>
        <h2 className="text-xl font-semibold text-[#1D1D1D]">
          Initial distribution
        </h2>
        <div className="mt-3 flex h-48 items-center gap-8">
          <div>
            <img src={distributionImage} />
          </div>
          <div className=" text-base text-[#202020]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-[#0082FF]"></span>
              <p>Crowdsale investors: 80%</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-[#FAA002]"></span>
              <p>Foundation: 20%</p>
            </div>
          </div>
        </div>
        <p className="text-base text-[#3E424A] ">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </section>
  );
}

export default Tokenomics;
