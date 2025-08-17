import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

// Mock cn function since we don't have access to it
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function VideoToggle() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  console.log("🎬 VideoToggle component loaded!");
  console.log(
    "🎬 VideoToggle render - showVideo:",
    showVideo,
    "language:",
    selectedLanguage
  );

  const handlePlayClick = () => {
    console.log("🎥 Play button clicked! Current showVideo:", showVideo);
    setShowVideo(true);
    setVideoError(false);
    console.log("🎥 Set showVideo to true");
  };

  const handleVideoError = () => {
    console.log("❌ Video failed to load, falling back to photo");
    setVideoError(true);
    setShowVideo(false);
  };

  const handleLanguageChange = (newLanguage) => {
    console.log(
      "🌐 Language changed from",
      selectedLanguage,
      "to",
      newLanguage
    );
    setSelectedLanguage(newLanguage);

    // If video is playing, reload it with new language
    if (showVideo && videoRef.current) {
      console.log("🔄 Reloading video with new language");
      videoRef.current.load(); // This forces the video to reload with new sources
      videoRef.current
        .play()
        .catch((e) => console.log("Autoplay prevented:", e));
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto p-4">
      <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
        {!showVideo || videoError ? (
          <>
            {/* Photo Cover */}
            <img
              src="/images/kos.jpg"
              alt="Kostiantyn Kovalchuk"
              className="w-full h-full object-cover object-[center_10%]"
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center">
                <div
                  onClick={handlePlayClick}
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white transition-colors"
                >
                  <Play className="text-blue-600 w-6 h-6 ml-1" />
                </div>
                <p className="text-white font-medium">
                  {videoError
                    ? "Video unavailable - Try again"
                    : "Introduction Video"}
                </p>
              </div>
            </div>

            {/* Error Notice */}
            {videoError && (
              <div className="absolute top-2 left-2 bg-red-500/90 text-white px-2 py-1 rounded text-xs">
                Video failed to load
              </div>
            )}

            {/* Language Toggle */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 flex space-x-1">
                <button
                  onClick={() => handleLanguageChange("EN")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "EN"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange("ES")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "ES"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  ES
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              autoPlay
              onError={handleVideoError}
              key={selectedLanguage} // This also helps force re-render when language changes
            >
              {/* WebM format (preferred) */}
              <source
                src={
                  selectedLanguage === "EN"
                    ? "videos/intro-en.webm"
                    : "videos/intro-es.webm"
                }
                type="video/webm"
              />
              {/* MP4 format (fallback) */}
              <source
                src={
                  selectedLanguage === "EN"
                    ? "videos/intro-en.mp4"
                    : "videos/intro-es.mp4"
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Language Toggle for Video */}
            <div className="absolute top-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-full p-1 flex space-x-1">
                <button
                  onClick={() => handleLanguageChange("EN")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "EN"
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-white/20"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange("ES")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "ES"
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-white/20"
                  )}
                >
                  ES
                </button>
              </div>
            </div>

            {/* Close Video Button */}
            <div className="absolute top-4 left-4">
              <button
                onClick={() => setShowVideo(false)}
                className="w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
