import React from "react";
import { Search, ShoppingCart, User, Menu, Phone, Heart, ChevronLeft } from "lucide-react";
import logo from "@assets/generated_images/dermarokh_logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { PRODUCT_CATEGORIES } from "@/data/mockData";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="w-full z-50 bg-white border-b border-gray-100 font-sans">
      {/* Top Strip - Minimal */}
      <div className="bg-primary/10 text-primary text-xs py-2 text-center font-medium">
        <span>🌿 تضمین اصالت کالا + مشاوره رایگان تخصصی پوست و مو</span>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo Area */}
          <div className="flex items-center gap-2">
             <Sheet>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon" className="md:hidden">
                   <Menu className="h-6 w-6" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto font-sans">
                 <SheetHeader className="text-right border-b border-gray-100 pb-4 mb-4">
                   <SheetTitle className="text-primary font-black text-xl">DERMAROKH</SheetTitle>
                 </SheetHeader>
                 
                 <div className="flex flex-col gap-2">
                   <div className="mb-6">
                     <h4 className="font-bold text-gray-800 mb-3 text-sm">دسته‌بندی‌ها</h4>
                     <div className="flex flex-col gap-2">
                       {PRODUCT_CATEGORIES.map((cat) => (
                         <Link key={cat.id} href={`/category/${cat.id}`}>
                           <a className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group text-gray-600">
                             <div className="flex items-center gap-3">
                               <img src={cat.image} alt={cat.label} className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                               <span className="text-sm font-medium group-hover:text-primary">{cat.label}</span>
                             </div>
                             <ChevronLeft className="w-4 h-4 text-gray-300" />
                           </a>
                         </Link>
                       ))}
                     </div>
                   </div>

                   <div className="border-t border-gray-100 pt-4">
                     <Link href="/offers">
                       <a className="flex items-center gap-2 py-2 text-accent font-bold hover:text-accent/80">
                         <span>🔥 پیشنهادات ویژه</span>
                       </a>
                     </Link>
                     <a href="#" className="flex items-center gap-2 py-2 text-gray-600 hover:text-primary">
                       <span>📦 پیگیری سفارش</span>
                     </a>
                     <a href="#" className="flex items-center gap-2 py-2 text-gray-600 hover:text-primary">
                       <span>📞 تماس با ما</span>
                     </a>
                   </div>
                 </div>
               </SheetContent>
             </Sheet>

             <a href="/" className="text-2xl font-black tracking-tighter text-primary">
               DERMA<span className="text-foreground">ROKH</span>
               {/* <img src={logo} className="h-8" /> If we want image back later */}
             </a>
          </div>

          {/* Search Bar - Clean & Wide */}
          <div className="flex-1 max-w-3xl hidden md:block">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="جستجو نام محصول، برند یا دسته بندی..." 
                className="w-full pl-12 pr-4 h-12 rounded-lg bg-gray-50 border-gray-200 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:flex gap-2 text-gray-600 hover:text-primary">
               <User className="h-5 w-5" />
               <span className="text-sm">ورود به حساب</span>
            </Button>
            
            <div className="relative">
              <Button size="icon" variant="outline" className="h-12 w-12 rounded-lg border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                3
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="جستجو..." 
              className="w-full h-10 rounded-lg bg-gray-50 border-gray-200 text-sm"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation - Clean Bar */}
      <div className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-4 text-sm font-medium text-gray-600">
            <a href="#" className="flex items-center gap-2 text-primary font-bold">
              <Menu className="h-4 w-4" />
              دسته‌بندی‌ها
            </a>
            <a href="#" className="hover:text-primary transition-colors">مراقبت پوست</a>
            <a href="#" className="hover:text-primary transition-colors">ضد آفتاب</a>
            <a href="#" className="hover:text-primary transition-colors">سرم‌های پوستی</a>
            <a href="#" className="hover:text-primary transition-colors">آرایشی</a>
            <a href="#" className="hover:text-primary transition-colors">بهداشتی</a>
            <a href="#" className="text-accent hover:text-accent/80 transition-colors">پیشنهادات ویژه</a>
            <div className="flex-1" />
            <a href="#" className="text-gray-400 hover:text-gray-600 flex items-center gap-2 text-xs">
               <Phone className="h-3 w-3" />
               مشاوره خرید: ۰۲۱-۸۸۷۷۶۶۵۵
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
