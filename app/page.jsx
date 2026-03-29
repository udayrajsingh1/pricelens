import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Bell, Icon, LogIn, Rabbit, Shield } from "lucide-react";

import { Inter } from "next/font/google";
import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
const inter = Inter({ subsets: ["latin"] });


export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const products = [];
  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return <main className={inter.className}>
    <header className="flex justify-between items-center h-20">
      <div className="flex w-screen mr-10 ml-20 items-center">
        <Image
          src={"/final-logo.png"}
          alt="logo"
          width={150}
          height={50}
          className="scale-160"
        />
      </div>
      {/* AUTH BUTTON */}
      <AuthButton user={user} />


    </header>
    <section className="flex flex-col justify-center items-center h-80 ">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Never Miss a Price Drop!
      </h1>
      <div className="text-lg font-medium text-slate-600 leading-relaxed">
        Track prices from any e-commerce site. Get instant alerts when prices drop.
        <br />
        <span className="flex justify-center">Save money effortlessly</span>
      </div>
    </section>
    <div>
      <AddProductForm user={user} />
    </div>
    <div>
      {products.length === 0 && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="hover:border-orange-300 transition-colors bg-white p-6 rounded-xl border-2 border-gray-200"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </main>;
}
