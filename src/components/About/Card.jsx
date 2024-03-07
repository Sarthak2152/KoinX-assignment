import { FaArrowRight } from "react-icons/fa";
function Card({ url, heading, blue }) {
  return (
    <div
      className={
        "flex gap-4 rounded-md bg-gradient-to-br p-3 " +
        `${blue === true ? " from-[#79F1A4] to-[#0E5CAD] " : " from-[#FF9865] to-[#EF3031] "}`
      }
    >
      <img src={url} className="w-[128px] rounded-lg  " alt="card image" />
      <div className="space-y-4 p-2">
        <h2 className="text-2xl font-bold text-white">{heading}</h2>
        <button className="flex flex-row items-center gap-[6px] rounded-lg bg-white px-4 py-2 text-sm   font-semibold text-[#0F1629]">
          <span>Check Now</span> <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Card;
