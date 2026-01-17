import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 160);

    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#751A23'
        }}
      />

      {/* Top-left corner decoration */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none m-0 p-0">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] m-0 p-0">
          <Image
            src="/decoration/top-left-corner.png"
            alt=""
            fill
            className="object-contain object-top-left"
            priority
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)',
              objectPosition: 'top left'
            }}
          />
        </div>
      </div>

      {/* Bottom-right corner decoration */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none m-0 p-0">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] m-0 p-0">
          <Image
            src="/decoration/right-bottom-corner.png"
            alt=""
            fill
            className="object-contain object-bottom-right"
            priority
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)',
              objectPosition: 'bottom right'
            }}
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center px-4 sm:px-8">
        {/* Monogram Logo */}
        <div className="relative flex items-center justify-center mb-8 sm:mb-12">
          <div className="relative w-28 sm:w-40 h-28 sm:h-40">
            <Image
              src="/monogram/updatedmonogram.png"
              alt={`${siteConfig.couple.groomNickname} and ${siteConfig.couple.brideNickname} Monogram`}
              fill
              className="object-contain"
              priority
              style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(28%) saturate(557%) hue-rotate(342deg) brightness(100%) contrast(88%)' }}
            />
          </div>
        </div>

        {/* Content section */}
        <div className="text-center max-w-sm sm:max-w-2xl px-4 sm:px-6">
          {/* Message */}
          <p
            className="text-xs sm:text-sm leading-relaxed sm:leading-loose tracking-wide mb-4 sm:mb-6 italic"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 300, color: '#E1C49C' }}
          >
            Please wait while we prepare your invitation
          </p>

          {/* Loading text */}
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 600, color: '#E1C49C' }}
          >
            Loading Invitation
          </p>

          {/* Couple names */}
          <p
            className="text-base sm:text-xl tracking-[0.12em] sm:tracking-[0.15em] mb-4 sm:mb-6"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 400, color: '#E1C49C' }}
          >
            {siteConfig.couple.groomNickname} and {siteConfig.couple.brideNickname}
          </p>

          {/* Couple paragraph */}
          <p
            className="text-[10px] sm:text-xs leading-relaxed sm:leading-loose tracking-wide mb-4 sm:mb-6 px-2 sm:px-4"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 300, color: 'rgba(225, 196, 156, 0.9)' }}
          >
            Two hearts, one journey. As {siteConfig.couple.groomNickname} and {siteConfig.couple.brideNickname} prepare to unite their lives in love, 
            we invite you to witness the beginning of their forever. Join us in celebrating this beautiful moment 
            as they say "I do" and embark on a lifetime of shared dreams, laughter, and endless love.
          </p>

          {/* Progress bar */}
          <div className="relative w-48 sm:w-64 h-0.5 mx-auto rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(225, 196, 156, 0.2)' }}>
            <div 
              className="absolute inset-y-0 left-0 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%`, backgroundColor: '#E1C49C' }}
            />
          </div>
          
          {/* Progress percentage */}
          <p
            className="text-[9px] sm:text-[10px] tracking-[0.2em] mt-2 sm:mt-3"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 300, color: 'rgba(225, 196, 156, 0.7)' }}
          >
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};