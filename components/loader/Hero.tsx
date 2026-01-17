import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

const desktopImages: string[] = [
  '/desktop-background/couple (1).webp',
  '/desktop-background/couple (2).webp',
  '/desktop-background/couple (3).webp',
  '/desktop-background/couple (4).webp',
  '/desktop-background/couple (5).webp',
];

const mobileImages: string[] = [
  '/mobile-background/couple (1).webp',
  '/mobile-background/couple (2).webp',
  '/mobile-background/couple (3).webp',
  '/mobile-background/couple (4).webp',
  '/mobile-background/couple (5).webp',
];

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const media = window.matchMedia("(max-width: 768px)");
    let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
    
    const handleChange = () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        setIsMobile(media.matches);
      }, 100);
    };
    
    // Set initial state
    setIsMobile(media.matches);
    
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange);
    } else if (typeof media.addListener === "function") {
      media.addListener(handleChange);
    }
    
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", handleChange);
      } else if (typeof media.removeListener === "function") {
        media.removeListener(handleChange);
      }
    };
  }, []);

  // Preload images for smooth transitions
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    let cancelled = false;
    const imagesToLoad = isMobile ? mobileImages : desktopImages;
    const loadedSet = new Set<string>();
    const imageRefs = imagesToLoad.map((src) => {
      const img = new window.Image();
      img.onload = () => {
        if (cancelled) return;
        loadedSet.add(src);
        setImagesLoaded(new Set(loadedSet));
      };
      img.onerror = () => {
        if (cancelled) return;
        loadedSet.add(src);
        setImagesLoaded(new Set(loadedSet));
      };
      img.src = src;
      return img;
    });

    return () => {
      cancelled = true;
      imageRefs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [mounted, isMobile]);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, [mounted]);

  const images = useMemo(() => (isMobile ? mobileImages : desktopImages), [isMobile]);

  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => {
          const isActive = i === index;
          const isVisible = isActive || imagesLoaded.has(src);
          
          return (
            <img
              key={src}
              src={src}
              alt="Couple"
              className={`absolute inset-0 w-full h-full object-cover will-change-transform ${
                isActive 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{
                transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            />
          );
        })}
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(81, 8, 15, 0.7), rgba(117, 26, 35, 0.7))'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <div className="mb-auto mt-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            {/* Monogram Image */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
              <Image
                src="/monogram/monogramnew.png"
                alt={`${siteConfig.couple.groomNickname} and ${siteConfig.couple.brideNickname} Monogram`}
                fill
                className="object-contain"
                priority
                style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)' }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <h2
            className="text-6xl md:text-8xl transform -rotate-6"
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontWeight: 400,
              color: '#E1C49C',
            }}
          >
            You are
          </h2>
          
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider uppercase"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              color: '#E1C49C',
            }}
          >
            Invited!
          </h1>

          <button 
            onClick={() => {
              onOpen();
            }}
            className="px-10 py-4 font-serif text-sm tracking-[0.2em] uppercase rounded-sm border transition-all duration-300"
            style={{
              backgroundColor: '#751A23',
              borderColor: '#E1C49C',
              color: '#E1C49C',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(117, 26, 35, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#751A23';
            }}
          >
            <span
              style={{ fontFamily: '"Cinzel", serif', fontWeight: 500, color: '#E1C49C' }}
            >
              Open Invitation
            </span>
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};