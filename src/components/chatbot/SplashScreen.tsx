import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Glow animation
    const glowInterval = setInterval(() => {
      setGlowIntensity((prev) => Math.min(prev + 0.02, 1));
    }, 30);

    // Complete splash after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => {
      clearInterval(glowInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 transition-opacity duration-500",
        !isVisible && "opacity-0 pointer-events-none"
      )}
    >
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" />

      {/* Main content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Logo/Name */}
        <div className="relative">
          <h1
            className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
            style={{
              textShadow: `0 0 ${20 * glowIntensity}px rgba(139, 92, 246, ${glowIntensity}), 0 0 ${40 * glowIntensity}px rgba(139, 92, 246, ${glowIntensity * 0.5})`,
              filter: `brightness(${1 + glowIntensity * 0.5})`,
            }}
          >
            MRD-RAG
          </h1>
          
          {/* Holographic lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-primary/80 font-light tracking-widest animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Multi-Resource Data — Retrieval Augmented Generation
        </p>

        {/* Loading bar */}
        <div className="w-64 h-1 mx-auto bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-100"
            style={{ width: `${glowIntensity * 100}%` }}
          />
        </div>

        {/* Status text */}
        <p className="text-sm text-primary/60 animate-pulse">
          Initializing AI System...
        </p>
      </div>

      {/* Light flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};
