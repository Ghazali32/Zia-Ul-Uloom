import video from '../assets/video.mp4'
function VideoSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">مناظر المدرسة</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Aerial View of the Madrasa
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Drone shots and visuals showcasing the beautiful campus of Madrasa Ziaul Uloom, Raebareli.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border border-accent/20 z-10 pointer-events-none" />

            {/* Local Video — rotated left to correct orientation */}
            <div className="relative w-full aspect-video overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-[177.78%] h-[177.78%] object-cover absolute top-1/2 left-1/2"
                style={{ transform: 'translate(-50%, -50%) rotate(-90deg)', transformOrigin: 'center center' }}
                preload="auto"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-neutral-500 mt-4">
            Madrasa Ziaul Uloom, Maidanpur, Takiya Kalan, Raebareli
          </p>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
