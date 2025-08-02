import { Download, ExternalLink } from "lucide-react";

export default function ResumeBlock() {
  const handleThumbnailClick = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kostiantyn_Kovalchuk_Resume.pdf';
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
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md group-hover:shadow-lg transition-shadow flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Resume PDF</p>
                  </div>
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
                <p className="text-gray-600">View my complete professional background and experience.</p>
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
