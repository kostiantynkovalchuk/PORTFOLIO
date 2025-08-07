import { ExternalLink } from "lucide-react";

interface CaseCardProps {
  case: {
    id: string;
    title: string;
    tags: string[];
    category: string;
    image: string;
    url: string;
    description: string;
    features: string[];
  };
}

export default function CaseCard({ case: caseItem }: CaseCardProps) {
  return (
    <a
      href={caseItem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img
          src={caseItem.image}
          alt={`${caseItem.title} project screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-electric-blue/10 text-electric-blue text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-blue transition-colors">
          {caseItem.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {caseItem.description}
        </p>
      </div>
    </a>
  );
}
