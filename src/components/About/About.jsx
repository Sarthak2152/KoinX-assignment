import Card from "./Card";

function About() {
  return (
    <section className="rounded-lg bg-white p-6">
      <h1 className="mb-6 text-2xl font-semibold">About Bitcoin</h1>
      <div className="flex flex-col gap-4">
        {/* what is bitcoin */}
        <div className="border-b border-[#c9cfdda9] pb-4 ">
          <h2 className="mb-3 text-lg font-bold text-[#0B1426]">
            What is Bitcoin?
          </h2>
          <p className="text-base text-[#3E424A] ">
            Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
            volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
            currently -7.70% from its 7-day all-time high of $18,366.66, and
            3.40% from its 7-day all-time low of $16,394.75. BTC has a
            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        {/* Lorem*/}
        <div className="border-b border-[#c9cfdda9] pb-4 ">
          <h2 className="mb-3 text-lg font-bold text-[#0B1426]">
            Lorem ipsum dolor sit amet
          </h2>
          <div className="space-y-4">
            <p className="text-base text-[#3E424A]">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>
            <p className="text-base text-[#3E424A]">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="text-base text-[#3E424A]">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>
        </div>
        {/* Holding BTC */}
        <div className="border-b border-[#c9cfdda9] pb-4">
          <h1 className="mb-2 text-2xl font-semibold text-[#0F1629]">
            Already Holding Bitcoin?
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card
              heading="Calculate your profits"
              blue={true}
              url={images[1]}
            />
            <Card
              heading="Calculate your tax liability"
              blue={false}
              url={images[0]}
            />
          </div>
        </div>
        <div>
          <p className="text-base text-[#3E424A]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
const images = [
  "https://images.unsplash.com/photo-1613843433065-819a04a47a09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
