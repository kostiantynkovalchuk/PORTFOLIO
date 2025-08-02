import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoToggle() {
  const [selectedLanguage, setSelectedLanguage] = useState<"EN" | "ES">("EN");

  return (
    <div className="relative">
      <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-blue-600/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
              <Play className="text-electric-blue w-6 h-6 ml-1" />
            </div>
            <p className="text-white font-medium">Introduction Video</p>
          </div>
        </div>
        
        {/* Language Toggle */}
        <div className="absolute top-4 right-4">
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
      </div>
    </div>
  );
}
