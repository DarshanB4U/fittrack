function Ribbon() {
  const items = [
    {
      name: "Nike",
      logo: "https://cdn.simpleicons.org/nike",
    },
    {
      name: "Adidas",
      logo: "https://cdn.simpleicons.org/adidas",
    },
    {
      name: "Puma",
      logo: "https://cdn.simpleicons.org/puma",
    },
    {
      name: "Reebok",
      logo: "https://cdn.simpleicons.org/reebok",
    },
    {
      name: "Shopify",
      logo: "https://cdn.simpleicons.org/shopify",
    },
    {
      name: "Spotify",
      logo: "https://cdn.simpleicons.org/spotify",
    },
    {
      name: "Strava",
      logo: "https://cdn.simpleicons.org/strava",
    },
    {
      name: "Fitbit",
      logo: "https://cdn.simpleicons.org/fitbit",
    },
    {
      name: "Peloton",
      logo: "https://cdn.simpleicons.org/peloton",
    },
    {
      name: "Garmin",
      logo: "https://cdn.simpleicons.org/garmin",
    },
  ];

  // Duplicate items for seamless infinite loop
  const scrollItems = [...items, ...items];

  return (
    <div className="z-10 bg-[#C99886] bottom-1 w-full h-20 overflow-hidden border-y border-black/10">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container {
          display: flex;
          animation: scroll 35s linear infinite;
          width: max-content;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="scroll-container flex items-center h-full">
        {scrollItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-4 px-8 whitespace-nowrap"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-8 h-8 object-contain brightness-0"
            />

            <span className="text-black text-2xl font-bold font-(family-name:--font-ibm-plex-mono)">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ribbon;
