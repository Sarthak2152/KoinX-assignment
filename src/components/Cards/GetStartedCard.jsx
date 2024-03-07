import GettingStarted from "../../assets/images/gettingStarted.png";
function GetStartedCard() {
  return (
    <div className="bg-[#0052FE] px-12 pb-12 pt-8">
      {/* title/header */}
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-bold text-white">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-sm text-[#F2F2F2]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
    </div>
  );
}

export default GetStartedCard;
