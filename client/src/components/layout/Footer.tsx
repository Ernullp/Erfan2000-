import React from "react";
import logo from "@assets/generated_images/dermarokh_logo.png";
import { Phone, Mail, MapPin, Instagram, Send, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOOTER_LINKS } from "@/data/mockData";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Top: Newsletter & Social */}
        <div className="bg-primary/5 rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
           <div className="text-center md:text-right">
             <h4 className="text-xl font-bold text-primary mb-2">عضویت در خبرنامه درمارخ</h4>
             <p className="text-gray-600 text-sm">از جدیدترین تخفیف‌ها و محصولات زودتر از بقیه باخبر شوید!</p>
           </div>
           
           <div className="flex w-full md:max-w-md gap-2">
             <Input placeholder="ایمیل خود را وارد کنید..." className="bg-white rounded-xl border-gray-200 focus:border-primary h-12" />
             <Button className="h-12 px-6 rounded-xl font-bold text-white bg-primary hover:bg-primary/90">ثبت</Button>
           </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <img src={logo} alt="DermaRokh" className="h-10 w-auto mb-4 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <p className="text-gray-500 text-sm leading-7 text-justify">
              درمارخ، سرزمین زیبایی شما. ما با گردآوری بهترین برندهای آرایشی و بهداشتی جهان، تلاش می‌کنیم تجربه‌ای متفاوت از خرید آنلاین را برای شما رقم بزنیم. اصالت، کیفیت و زیبایی، قول ما به شماست.
            </p>
            <div className="flex gap-4 mt-4">
               <SocialIcon icon={Instagram} />
               <SocialIcon icon={Send} /> {/* Telegram Placeholder */}
               <SocialIcon icon={Twitter} />
               <SocialIcon icon={Facebook} />
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_LINKS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h5 className="font-bold text-gray-800 text-lg border-b-2 border-pink-100 pb-2 inline-block">{col.title}</h5>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-500 hover:text-primary hover:pr-2 transition-all text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-200"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Trust */}
          <div className="space-y-4">
            <h5 className="font-bold text-gray-800 text-lg border-b-2 border-pink-100 pb-2 inline-block">تماس با ما</h5>
            <ul className="space-y-3 text-sm text-gray-600">
               <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-primary" />
                 <span>۰۲۱-۸۸۷۷۶۶۵۵</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-primary" />
                 <span>support@dermarokh.com</span>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-primary shrink-0" />
                 <span>تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج نگار، طبقه ۱۲</span>
               </li>
            </ul>
            
            {/* Trust Badges Placeholder */}
            <div className="flex gap-2 mt-6">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                 <span className="text-[10px] text-gray-400 font-bold text-center">ENAMAD</span>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                 <span className="text-[10px] text-gray-400 font-bold text-center">SAMANDEHI</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
          <p>© ۲۰۲۴ تمامی حقوق برای فروشگاه اینترنتی درمارخ محفوظ است.</p>
          <p className="mt-2">Designed with ❤️ by Replit Agent</p>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
      <Icon className="w-5 h-5" />
    </a>
  );
}
