interface FeatureGridProps {
  className?: string;
}

export function FeatureGrid({ className = "" }: FeatureGridProps) {
  return (
    <div className={`py-16 ${className}`}>
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 pt-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-3xl lg:text-6xl sm:text-5xl font-bold leading-10 lg:leading-20 text-black dark:text-white">
            Your City, Your Scene, <br />
            <span className="text-orange-500">On Trck</span>
          </h1>
          <button className="border border-black dark:border-amber-50 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white dark:hover:bg-amber-50 dark:hover:text-black transition-colors">
            How Trck Works
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large Feature Card - Premium Experiences */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-950 max-lg:text-center">
                  Discover Premium Experiences
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  TRCK helps you discover parties, outings, and fun experiences
                  based on your vibe, mood, or location, all in one place
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-lg">
                  <div className="size-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-4">🎉</div>
                      <p className="text-xl font-bold">Party Crew</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>

          {/* Medium Feature Card - Built Around You */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-[30rem]">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-950 max-lg:text-center">
                  Built Around You
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We highlight the best experiences around you, so you spend
                  less time searching and more time enjoying
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4">📍</div>
                    <p className="text-lg font-semibold">Location Based</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>

          {/* Dark Feature Card - Find Hidden Gems */}
          <div className="relative max-lg:row-start-4 lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#1d1c20] max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col justify-center rounded-2xl">
              <div className="px-10 pt-12 pb-8">
                <h2 className="text-white text-lg font-semibold mb-4">
                  Find Hidden Gems
                </h2>
                <p className="text-[#a9a9a9] text-sm mb-8">
                  You can explore hidden spots, plan solo or with friends, and
                  book instantly for a stress-free, soft life experience
                </p>
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    <p className="text-2xl sm:text-3xl py-4 font-bold">
                      Your vibe on the inside
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-[#323238] text-2xl sm:text-3xl font-bold">
                      Lowkey from the outside
                    </p>
                    {/* Animated dots effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-8 left-12 animate-pulse"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-16 left-20 animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-12 left-8 animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-20 left-32 animate-pulse delay-300"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-6 left-28 animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-white/10 max-lg:rounded-t-4xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
