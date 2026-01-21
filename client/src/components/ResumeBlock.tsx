import { Download, ExternalLink } from "lucide-react";

export default function ResumeBlock() {
  const handleThumbnailClick = () => {
    window.open("/kos_kova_ai_engineer_resume.docx", "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/kos_kova_ai_engineer_resume.docx";
    link.download = "Kostiantyn_Kovalchuk_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-24 pb-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            {/* Left: PDF Thumbnail */}
            <div className="md:col-span-1">
              <div
                className="relative group cursor-pointer"
                onClick={handleThumbnailClick}
              >
                <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow border overflow-hidden">
                  <img
                    src="/resume-thumbnail.jpg"
                    alt="Resume Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <ExternalLink className="text-electric-blue w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right: Download Button */}
            <div className="md:col-span-3 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Resume</h2>
                <p className="text-gray-600">
                  View my professional background and experience.
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-electric-blue text-white font-medium rounded-full hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
