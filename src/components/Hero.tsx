import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
          SorrshaTech
        </h1>
        <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto">
          Something for Tech company
        </p>
      </div>
    </section>
  );
};
