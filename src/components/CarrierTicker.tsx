const carriers = [
  { src: "/carriers/transamerica.jpg",        alt: "Transamerica" },
  { src: "/carriers/mutual-of-omaha.jpg",     alt: "Mutual of Omaha" },
  { src: "/carriers/aig.jpg",                 alt: "AIG" },
  { src: "/carriers/gerber-life.jpg",         alt: "Gerber Life" },
  { src: "/carriers/americo.jpg",             alt: "Americo" },
  { src: "/carriers/athene.jpg",              alt: "Athene" },
  { src: "/carriers/foresters-financial.jpg", alt: "Foresters Financial" },
  { src: "/carriers/fidelity-guaranty.jpg",   alt: "Fidelity & Guaranty Life" },
  { src: "/carriers/national-life-group.jpg", alt: "National Life Group" },
  { src: "/carriers/american-equity.jpg",     alt: "American Equity" },
  { src: "/carriers/american-amicable.jpg",   alt: "American-Amicable" },
  { src: "/carriers/united-home-life.jpg",    alt: "United Home Life" },
];

const CarrierTicker = () => (
  <div className="overflow-hidden py-4 relative">
    {/* Fade edges */}
    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

    {/* Scrolling track — list duplicated for seamless loop */}
    <div className="flex animate-ticker w-max gap-4">
      {[...carriers, ...carriers].map((c, i) => (
        <div
          key={i}
          className="shrink-0 w-64 h-36 bg-white rounded-lg flex items-center justify-center p-5"
        >
          <img
            src={c.src}
            alt={c.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

export default CarrierTicker;
