import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoToggle() {
  const [selectedLanguage, setSelectedLanguage] = useState<"EN" | "ES">("EN");
  const [showVideo, setShowVideo] = useState(false);

  console.log(
    "🎬 VideoToggle render - showVideo:",
    showVideo,
    "language:",
    selectedLanguage
  );

  const handlePlayClick = () => {
    console.log("🎥 Play button clicked! Current showVideo:", showVideo);
    setShowVideo(true);
    console.log("🎥 Set showVideo to true");
  };

  return (
    <div className="relative">
      <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
        {!showVideo ? (
          <>
            {/* Photo Cover */}
            <img
              src="images/kos.jpg"
              alt="Kostiantyn Kovalchuk"
              className="w-full h-full object-cover object-[center_5%]"
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center">
                <div
                  onClick={handlePlayClick}
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white transition-colors"
                >
                  <Play className="text-electric-blue w-6 h-6 ml-1" />
                </div>
                <p className="text-white font-medium">Introduction Video</p>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 flex space-x-1">
                <button
                  onClick={() => setSelectedLanguage("EN")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "EN"
                      ? "bg-electric-blue text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setSelectedLanguage("ES")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "ES"
                      ? "bg-electric-blue text-white"
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
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={
                selectedLanguage === "EN"
                  ? "videos/intro-en.mp4"
                  : "videos/intro-es.mp4"
              }
            >
              Your browser does not support the video tag.
            </video>

            {/* Language Toggle for Video */}
            <div className="absolute top-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-full p-1 flex space-x-1">
                <button
                  onClick={() => setSelectedLanguage("EN")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "EN"
                      ? "bg-electric-blue text-white"
                      : "text-white hover:bg-white/20"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setSelectedLanguage("ES")}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-all",
                    selectedLanguage === "ES"
                      ? "bg-electric-blue text-white"
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
