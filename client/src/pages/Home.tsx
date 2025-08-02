import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import CaseCard from "@/components/CaseCard";
import casesData from "@/data/cases.json";
import { useState } from "react";

interface Case {
  id: string;
  title: string;
  tags: string[];
  category: string;
  image: string;
  url: string;
  description: string;
  features: string[];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const cases: Case[] = casesData;

  const filteredCases = selectedCategory === "all" 
    ? cases 
    : cases.filter(case_ => case_.category === selectedCategory);

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
              <CaseCard key={case_.id} case={case_} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
