import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Stories from "@/components/home/Stories";
import CrazySale from "@/components/home/CrazySale";
import ProductShowcase from "@/components/home/ProductShowcase";
import CategoryGrid from "@/components/home/CategoryGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <Stories />
        <Hero />
        <CategoryGrid />
        <CrazySale />
        <ProductShowcase />
        {/* Simple Banner Strip */}
        <div className="container mx-auto px-4 mb-12">
          <div className="w-full h-24 md:h-32 bg-gradient-to-r from-primary/80 to-primary rounded-2xl flex items-center justify-between px-8 text-white shadow-lg overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
               <h3 className="text-xl md:text-2xl font-bold mb-1">اپلیکیشن درمارخ</h3>
               <p className="text-sm opacity-90">خرید راحت‌تر با اپلیکیشن موبایل</p>
             </div>
             <button className="relative z-10 bg-white text-primary px-6 py-2 rounded-xl font-bold shadow-sm hover:bg-gray-100 transition-colors">
               دانلود مستقیم
             </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
