function Team() {
  return (
    <section className="space-y-6 rounded-lg bg-white p-6">
      <h1 className="text-2xl font-semibold text-[#0F1629]">Team</h1>
      <p className="text-base font-normal text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      {/* Team cards */}
      <div className="space-y-6">
        {team.map((member, index) => {
          return (
            <div
              className="flex flex-row   rounded bg-[#E8F4FD] p-3  "
              key={index}
            >
              <div className="text-center">
                <img
                  className="max-w-28 rounded-md"
                  src={member.image}
                  alt={member.name}
                />
                <h2 className="mb-1 mt-3 text-base font-semibold text-[#0F1629]">
                  {member.name}
                </h2>
                <p className="text-xs font-medium text-[#788F9B]">
                  {member.designation}
                </p>
              </div>
              <div className="p-4">
                <p className="text-sm font-normal text-[#0F1629]">
                  {member.info}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Team;

const team = [
  {
    name: "John Smith",
    image: "../../../public/images/three.png",
    designation: "Designation Here",
    info: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Elina Williams",
    designation: "Designation Here",
    image: "../../../public/images/two.png",
    info: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "John Smith",
    designation: "Designation Here",
    image: "../../../public/images/one.png",
    info: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];
