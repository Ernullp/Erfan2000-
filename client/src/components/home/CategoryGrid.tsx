import React from "react";
import { PRODUCT_CATEGORIES } from "@/data/mockData";
import { Link } from "wouter";

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <h3 className="text-2xl font-bold text-gray-800">دسته‌بندی محصولات</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {PRODUCT_CATEGORIES.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <a className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-50 border border-gray-100 group-hover:border-primary/30 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <img 
                  src={category.image} 
                  alt={category.label} 
                  className="w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-gray-700 group-hover:text-primary transition-colors text-center">
                {category.label}
              </h4>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
