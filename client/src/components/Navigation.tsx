import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            
            .logo-float {
              animation: float 3s ease-in-out infinite;
            }
          `,
        }}
      />

      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/images/logo3_spaced.png"
                alt="Kostiantyn Kovalchuk"
                className="h-12 w-auto logo-float"
              />
            </Link>
            <div className="flex space-x-8">
              <Link
                href="/"
                className={cn(
                  "font-medium transition-colors",
                  location === "/"
                    ? "text-electric-blue"
                    : "text-gray-600 hover:text-electric-blue"
                )}
              >
                Work
              </Link>
              <Link
                href="/info"
                className={cn(
                  "font-medium transition-colors",
                  location === "/info"
                    ? "text-electric-blue"
                    : "text-gray-600 hover:text-electric-blue"
                )}
              >
                Info
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
