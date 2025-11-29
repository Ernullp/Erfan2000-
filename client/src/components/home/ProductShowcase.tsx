import React from "react";
import { CATEGORIES, PRODUCTS } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="container mx-auto px-4 py-8 mb-12">
      
      <Tabs defaultValue="popular" className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-4">
           <h3 className="text-2xl font-bold text-gray-800">
             محصولات منتخب
           </h3>
           
           <TabsList className="bg-transparent p-0 h-auto gap-6">
             {CATEGORIES.map((cat) => (
               <TabsTrigger 
                 key={cat.id} 
                 value={cat.id}
                 className="bg-transparent px-0 py-2 text-base text-gray-400 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-primary rounded-none transition-all"
               >
                 {cat.label}
               </TabsTrigger>
             ))}
           </TabsList>
        </div>

        {CATEGORIES.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
               {PRODUCTS.map((product) => (
                 <MinimalProductCard key={`${cat.id}-${product.id}`} product={product} />
               ))}
            </div>
          </TabsContent>
        ))}

      </Tabs>
    </section>
  );
}

function MinimalProductCard({ product }: { product: any }) {
  return (
    <div className="group">
       <div className="relative aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden mb-4">
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

       <div className="space-y-1">
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
          
          <div className="pt-1 flex items-center gap-3">
             <span className="font-bold text-gray-900">
               {product.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">تومان</span>
             </span>
             {product.oldPrice && (
               <span className="text-xs text-gray-300 line-through">
                 {product.oldPrice.toLocaleString()}
               </span>
             )}
          </div>
       </div>
    </div>
  );
}
