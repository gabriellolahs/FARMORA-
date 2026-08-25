import { Button } from "../ui/Button";
import { ManifestTag } from "../ui/ManifestTag";

export function LogisticsHero() {
  return (
    <section className="grid grid-cols-1 bg-canopy lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 pb-16 pt-36 lg:px-16 lg:pb-24">
        <ManifestTag tone="progress" dot className="!border-wheat/30 !text-wheat">
          Introducing Farmora Logistics
        </ManifestTag>
        <h1 className="mt-6 max-w-lg font-display text-4xl font-medium leading-[1.08] text-parchment sm:text-5xl">
          We&apos;re closing the gap between the field and the market.
        </h1>
        <p className="mt-6 max-w-md text-parchment/65">
          Farmora is expanding beyond consultation and planting into full
          agricultural logistics — engineering seamless farm-to-market
          transport, international seed shipping, and specialized equipment
          handling.
        </p>
        <div className="mt-8">
          <Button href="#rollout" variant="ghost-dark">
            Explore the Logistics Rollout
          </Button>
        </div>
      </div>

      <div className="relative flex min-h-[360px] items-center justify-center bg-canopy-2 lg:min-h-0">
        <svg viewBox="0 0 400 300" className="h-full w-full max-w-md p-10">
          <path
            d="M40 230 Q 120 60 200 150 T 360 90"
            fill="none"
            stroke="#c9a227"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            className="route-dash"
          />
          {/* farm */}
          <g transform="translate(30,220)">
            <circle r="14" fill="#3e7a4a" fillOpacity="0.18" />
            <text x="0" y="5" textAnchor="middle" fontSize="13">🌱</text>
          </g>
          {/* ship */}
          <g transform="translate(200,150)">
            <circle r="14" fill="#c9a227" fillOpacity="0.15" />
            <text x="0" y="5" textAnchor="middle" fontSize="13">🚢</text>
          </g>
          {/* truck */}
          <g transform="translate(290,110)">
            <circle r="14" fill="#a1502c" fillOpacity="0.15" />
            <text x="0" y="5" textAnchor="middle" fontSize="13">🚚</text>
          </g>
          {/* market */}
          <g transform="translate(365,88)">
            <circle r="14" fill="#c9a227" fillOpacity="0.2" />
            <text x="0" y="5" textAnchor="middle" fontSize="13">🏙️</text>
          </g>

          <circle r="4" fill="#c9a227">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M40 230 Q 120 60 200 150 T 360 90"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
}
