import VideoToggle from "./VideoToggle";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 lg:order-1">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-text leading-tight mb-4">
                Kos Kova
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 font-medium mb-6">
                AI Engineer &<br className="sm:hidden" /> Product Owner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Building digital products that solve problems, help people and
                create value.
              </p>
            </div>
          </div>

          {/* Right Column - Video Toggle */}
          <div className="lg:order-2">
            <VideoToggle />
          </div>
        </div>
      </div>
    </section>
  );
}
