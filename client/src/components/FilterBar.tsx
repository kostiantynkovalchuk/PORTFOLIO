import { cn } from "@/lib/utils";

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  const categories = [
    { id: "all", label: "All" },
    { id: "mini-apps", label: "Mini Apps" },
    { id: "web-development", label: "Web Development" },
    { id: "product-management", label: "Product Management" },
    { id: "games", label: "Games" },
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-all",
              selectedCategory === category.id
                ? "bg-electric-blue text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
