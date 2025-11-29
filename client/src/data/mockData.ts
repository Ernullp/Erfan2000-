import { Package, Star, Clock, Zap, Flame, Heart, ShoppingBag, Truck, ShieldCheck, Phone } from "lucide-react";
import skincareIcon from "@assets/generated_images/skincare_category_icon.png";
import makeupIcon from "@assets/generated_images/makeup_category_icon.png";
import haircareIcon from "@assets/generated_images/haircare_category_icon.png";
import fragranceIcon from "@assets/generated_images/fragrance_category_icon.png";
import personalCareIcon from "@assets/generated_images/personal_care_category_icon.png";
import supplementsIcon from "@assets/generated_images/supplements_category_icon.png";

export const BRANDS = [
  { id: 1, name: "L'Oreal", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Or%C3%A9al_logo.svg" },
  { id: 2, name: "Neutrogena", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Neutrogena.svg" },
  { id: 3, name: "Lafarrerr", logo: "https://lafarrerr.com/wp-content/uploads/2021/07/logo-lafarrerr-new.svg" }, 
  { id: 4, name: "Inlay", logo: "https://inlaycosmetics.com/wp-content/uploads/2020/06/logo.png" },
  { id: 5, name: "Maybelline", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Maybelline_Logo.svg" },
  { id: 6, name: "Clinique", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clinique_logo.svg" },
];

export const STORIES = [
  { id: 1, title: "تخفیف‌ها", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=150&h=150&fit=crop&q=80", color: "ring-red-500" },
  { id: 2, title: "برندها", image: "https://images.unsplash.com/photo-1571781535009-7609877d840b?w=150&h=150&fit=crop&q=80", color: "ring-purple-500" },
  { id: 3, title: "جدیدترین‌ها", image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=150&h=150&fit=crop&q=80", color: "ring-pink-500" },
  { id: 4, title: "روتین پوست", image: "https://images.unsplash.com/photo-1556228552-523cd13b86fa?w=150&h=150&fit=crop&q=80", color: "ring-green-500" },
  { id: 5, title: "مو", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=150&h=150&fit=crop&q=80", color: "ring-blue-500" },
  { id: 6, title: "آرایشی", image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?w=150&h=150&fit=crop&q=80", color: "ring-yellow-500" },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "میسلار واتر پوست چرب",
    brand: "Lafarrerr",
    price: 185000,
    oldPrice: 245000,
    image: "https://images.unsplash.com/photo-1556228852-933c11c4554c?w=400&q=80",
    badge: "فروش ویژه",
    rating: 4.5,
    reviews: 120,
    category: "skincare"
  },
  {
    id: 2,
    title: "ضد آفتاب SPF 50 بی رنگ",
    brand: "Neutrogena",
    price: 450000,
    oldPrice: 520000,
    image: "https://images.unsplash.com/photo-1556228720-1957be77e30d?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 85,
    category: "skincare"
  },
  {
    id: 3,
    title: "رژ لب مات مخملی شماره 12",
    brand: "Inlay",
    price: 120000,
    oldPrice: 160000,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80",
    badge: "محبوب",
    rating: 4.2,
    reviews: 210,
    category: "makeup"
  },
  {
    id: 4,
    title: "ریمل حجم دهنده کربن بلک",
    brand: "L'Oreal",
    price: 380000,
    oldPrice: 450000,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&q=80",
    badge: "پرفروش",
    rating: 4.7,
    reviews: 340,
    category: "makeup"
  },
  {
    id: 5,
    title: "سرم ویتامین سی 20%",
    brand: "Prime",
    price: 290000,
    oldPrice: 350000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    badge: "شگفت‌انگیز",
    rating: 4.6,
    reviews: 95,
    category: "skincare"
  },
  {
    id: 6,
    title: "کرم آبرسان قوی",
    brand: "Clinique",
    price: 1200000,
    oldPrice: 1450000,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80",
    badge: "لوکس",
    rating: 4.9,
    reviews: 45,
    category: "skincare"
  },
];

export const CATEGORIES = [
  { id: "popular", label: "محبوب‌ترین‌ها", icon: Star },
  { id: "bestsellers", label: "پرفروش‌ترین‌ها", icon: Flame },
  { id: "newest", label: "جدیدترین‌ها", icon: Zap },
];

export const PRODUCT_CATEGORIES = [
  { id: "skincare", label: "مراقبت پوست", image: skincareIcon },
  { id: "makeup", label: "آرایشی", image: makeupIcon },
  { id: "haircare", label: "مراقبت مو", image: haircareIcon },
  { id: "fragrance", label: "عطر و ادکلن", image: fragranceIcon },
  { id: "personal-care", label: "بهداشت شخصی", image: personalCareIcon },
  { id: "supplements", label: "مکمل‌های غذایی", image: supplementsIcon },
];

export const FOOTER_LINKS = [
  {
    title: "خدمات مشتریان",
    links: ["پاسخ به پرسش‌های متداول", "رویه‌های بازگرداندن کالا", "شرایط استفاده", "حریم خصوصی"],
  },
  {
    title: "اطلاعات درمارخ",
    links: ["درباره ما", "تماس با ما", "همکاری با ما", "فرصت‌های شغلی"],
  },
];
