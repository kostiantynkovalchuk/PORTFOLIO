import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/logo3.png"
              alt="Kostiantyn Kovalchuk"
              className="h-12 w-auto"
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
  );
}
