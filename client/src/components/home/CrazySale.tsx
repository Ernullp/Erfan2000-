import React from "react";
import { PRODUCTS } from "@/data/mockData";
import { Clock, ArrowLeft, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import saleBg from "@assets/generated_images/luxury_sale_background.png";

export default function CrazySale() {
  return (
    <section className="w-full py-12 my-8 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 z-0">
         <img src={saleBg} alt="Sale Background" className="w-full h-full object-cover opacity-40 bg-primary" />
         <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Percent className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">پیشنهادات شگفت‌انگیز</h2>
              <p className="text-gray-300 text-sm">تخفیف‌های محدود روی محصولات منتخب</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
             <span className="text-sm text-gray-300">زمان باقی‌مانده:</span>
             <div className="flex items-center gap-2 font-mono text-xl font-bold text-accent">
               <span>12</span>:<span>45</span>:<span>30</span>
             </div>
             <Clock className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Elegant Product Scroll */}
        <div className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 md:mx-0 md:px-0">
           <div className="flex gap-5 w-max">
             {PRODUCTS.map((product) => (
               <Card key={product.id} className="w-[240px] flex-shrink-0 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl overflow-hidden group cursor-pointer">
                  
                  <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                    
                    {/* Elegant Badge */}
                    <div className="absolute top-3 right-3 bg-destructive text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{product.brand}</span>
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2 h-10 mt-1 group-hover:text-primary transition-colors">
                        {product.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                       <span className="text-xs text-gray-400 line-through">
                         {product.oldPrice.toLocaleString()}
                       </span>
                       <span className="text-base font-black text-gray-900">
                         {product.price.toLocaleString()} <span className="text-[10px] font-normal text-gray-500">تومان</span>
                       </span>
                    </div>
                  </CardContent>
               </Card>
             ))}
             
             <div className="w-[100px] flex-shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <ArrowLeft className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">مشاهده همه</span>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
