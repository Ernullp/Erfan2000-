import React from "react";
import heroImage from "@assets/generated_images/elegant_teal_hero.png";
import serumBanner from "@assets/generated_images/serum_banner_green.png";
import creamBanner from "@assets/generated_images/cream_texture_gold.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[550px]">
        
        {/* Main Hero - Clean & Elegant */}
        <div className="md:col-span-8 relative rounded-2xl overflow-hidden group">
          <img 
            src={heroImage} 
            alt="DermaRokh Skincare" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent flex flex-col justify-center p-8 md:p-16 text-white">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4 opacity-0 translate-y-4 animate-[fade-in_0.5s_ease-out_forwards]">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium tracking-wider uppercase">تخصصی‌ترین مرجع پوست و مو</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight opacity-0 translate-y-4 animate-[fade-in_0.5s_ease-out_0.2s_forwards]">
                زیبایی، <br/>
                <span className="text-secondary font-serif italic">به روایت علم</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 font-light leading-relaxed opacity-0 translate-y-4 animate-[fade-in_0.5s_ease-out_0.4s_forwards]">
                مجموعه‌ای از برترین برندهای درماتولوژی جهان. <br/>
                مشاوره رایگان برای انتخاب بهترین روتین پوستی شما.
              </p>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-lg px-8 h-12 text-base opacity-0 translate-y-4 animate-[fade-in_0.5s_ease-out_0.6s_forwards]">
                مشاهده محصولات <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Side Banners - Vertical Stack */}
        <div className="md:col-span-4 flex flex-col gap-4">
          
          <div className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer">
            <img src={serumBanner} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-secondary transition-colors">سرم‌های تخصصی</h3>
              <p className="text-sm text-gray-200">درمان قطعی لک و چروک</p>
            </div>
          </div>

          <div className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer">
            <img src={creamBanner} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-secondary transition-colors">مرطوب کننده‌ها</h3>
              <p className="text-sm text-gray-200">آبرسانی عمیق پوست</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
