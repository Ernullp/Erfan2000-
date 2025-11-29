import React from "react";
import { STORIES } from "@/data/mockData";

export default function Stories() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {STORIES.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer group min-w-[80px]">
            <div className={`w-20 h-20 rounded-full p-1 border-2 border-transparent group-hover:border-primary transition-all duration-300`}>
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full rounded-full object-cover shadow-sm group-hover:shadow-md"
              />
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-primary transition-colors">
              {story.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
