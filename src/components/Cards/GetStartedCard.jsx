import GettingStarted from "../../../public/images/GettingStarted.png";
import { FaArrowRight } from "react-icons/fa";
function GetStartedCard() {
  return (
    <div className="rounded-lg bg-[#0052FE] px-12 pb-12 pt-8">
      {/* title/header */}
      <div className="flex flex-col items-center gap-[1.13rem] text-center">
        <h1 className="mb-3 text-2xl font-bold text-white">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-sm text-[#F2F2F2]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img className="w-[180px]" src={GettingStarted} alt="illustration" />
        <button className="flex flex-row items-center gap-2 rounded-lg bg-white px-6 py-3  font-semibold text-[#0F1629]">
          <span>Get Started for FREE</span> <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default GetStartedCard;
