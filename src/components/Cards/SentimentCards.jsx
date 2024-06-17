const SentimentCard = ({ bgColor, icon }) => {
  const color = ` bg-[${bgColor}] `;
  return (
    <div className={"flex  gap-2 rounded-xl p-[18px] " + color}>
      <img className="h-11 w-11" src={icon} alt="icon" />
      <div>
        <h2 className="mb-2 text-sm font-semibold text-[#191C1F]">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h2>
        <p className="text-sm text-[#33415]">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in.
        </p>
      </div>
    </div>
  );
};

export default SentimentCard;
