import React from "react";
import { useRoute } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Filter, SlidersHorizontal } from "lucide-react";

export default function CategoryPage() {
  const [match, params] = useRoute("/category/:id");
  const categoryId = params?.id;
  
  const category = PRODUCT_CATEGORIES.find(c => c.id === categoryId);
  
  // Mock filter - in a real app this would filter by categoryId
  // For now, we'll show all products but pretend we're filtering if we had more data
  const categoryProducts = PRODUCTS; // In real app: PRODUCTS.filter(p => p.category === categoryId)

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-secondary/30 p-6 rounded-3xl">
          <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-sm">
            <img src={category.image} alt={category.label} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-right flex-1">
            <h1 className="text-3xl font-black text-primary mb-2">{category.label}</h1>
            <p className="text-gray-600 max-w-2xl">
              بهترین محصولات {category.label} با ضمانت اصالت و کیفیت. مجموعه ای از برترین برندهای روز دنیا.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block space-y-6">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-4 font-bold text-gray-800">
                <Filter className="w-5 h-5" />
                فیلترها
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-sm">برند</h4>
                  <div className="space-y-2">
                    {["L'Oreal", "Neutrogena", "Clinique"].map(b => (
                      <label key={b} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium mb-2 text-sm">محدوده قیمت</h4>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-primary ml-auto"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>۰</span>
                    <span>۵,۰۰۰,۰۰۰+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
               <span className="text-sm text-gray-500">نمایش {categoryProducts.length} محصول</span>
               <Button variant="outline" size="sm" className="md:hidden">
                 <SlidersHorizontal className="w-4 h-4 ml-2" />
                 فیلترها
               </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                   <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3">
                     <img 
                       src={product.image} 
                       alt={product.title} 
                       className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                     />
                     
                     <Button 
                       size="icon" 
                       className="absolute bottom-3 left-3 rounded-full bg-white text-gray-800 shadow-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                     >
                       <ShoppingCart className="w-4 h-4" />
                     </Button>
                   </div>

                   <div className="p-3 space-y-1">
                      <div className="flex items-center justify-between">
                         <span className="text-xs text-gray-400 font-medium uppercase">{product.brand}</span>
                         {product.rating && (
                           <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Star className="w-3 h-3 fill-accent text-accent" />
                              <span>{product.rating}</span>
                           </div>
                         )}
                      </div>
                      
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 h-10 group-hover:text-primary transition-colors cursor-pointer">
                        {product.title}
                      </h3>
                      
                      <div className="pt-1 flex flex-col items-start gap-0.5">
                         {product.oldPrice && (
                           <span className="text-xs text-gray-300 line-through">
                             {product.oldPrice.toLocaleString()}
                           </span>
                         )}
                         <span className="font-bold text-gray-900">
                           {product.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">تومان</span>
                         </span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
