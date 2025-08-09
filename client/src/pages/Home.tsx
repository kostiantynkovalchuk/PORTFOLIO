import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import CaseCard from "@/components/CaseCard";
import casesData from "@/data/cases.json";
import { useState } from "react";

interface Case {
  id: string;
  title: string;
  tags: string[];
  category: string | string[];
  image: string;
  url: string;
  behanceUrl?: string; // Optional Behance URL
  description: string;
  features: string[];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const cases: Case[] = casesData;

  // Updated filtering logic to handle array categories and add context
  const filteredCases =
    selectedCategory === "all"
      ? cases.map((case_) => ({ ...case_, currentFilter: selectedCategory }))
      : cases
          .filter((case_) => {
            // Handle both array and string categories
            if (Array.isArray(case_.category)) {
              return case_.category.includes(selectedCategory);
            } else {
              return case_.category === selectedCategory;
            }
          })
          .map((case_) => ({ ...case_, currentFilter: selectedCategory }));

  return (
    <div className="pt-20">
      <HeroSection />

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_) => (
              <CaseCard
                key={case_.id}
                case={{ ...case_, currentFilter: selectedCategory }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
