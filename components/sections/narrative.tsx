"use client"

import { Section } from "@/components/section"
import Stack from "@/components/stack"
import { motion } from "motion/react"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const loveStory = [
  "On February 5, 2015, destiny quietly began its work. Renzo saw Ghem in a Facebook photo—smiling effortlessly with her high school friends. In that single moment, curiosity turned into courage. He asked one of her friends for help, hoping for a simple introduction that would change everything.",
  "With a playful nudge from fate, her friend said, \"Accept mo daw si Renzo Liwanag… ayan ha, baka humabol pa kayo sa Valentine's.\"",
  "And so, Ghem accepted the friend request.",
  "What began as a simple click—an innocent \"accept\"—became the first chapter of a love story written not just by chance, but by perfect timing. From that small digital moment grew conversations, laughter, friendship, and a love strong enough to lead them here today—standing hand in hand, choosing each other, forever.",
  "Together, they discovered that love could be a partnership built on dreams. Even as students starting with online selling, they stood side by side—planning, hustling, and believing in their potential. They explored every venture their hearts dared to dream—buy and sell, boutique businesses, cellphone trading, motor parts, and barbecue stalls—proving that shared vision makes no dream too small and no goal too far. In every effort, they invested trust, patience, and love, building not just businesses but a life together rooted in teamwork, resilience, and growing love.",
  "Like all true love stories, theirs faced trials. In 2021, challenges led to a season of distance, where hearts were tested and paths uncertain. Yet, through patience, commitment, and enduring faith, Renzo and Ghem found their way back to one another. What was once shaken returned stronger, deeper, and more certain than ever before—a testament to love that perseveres.",
  "In 2023, after years of shared dedication and hard work, they opened their own minimart, turning dreams into reality and demonstrating the power of love, perseverance, and partnership.",
  "With Ghem devoted to her career and Renzo supporting their growing ventures, they continue to walk side by side.",
  "Today, they stand hand in hand, not only as partners in life and business but as souls who have chosen each other—today, tomorrow, and always. 💍"
]

export function Narrative() {
  const storyParagraphs = loveStory

  return (
    <Section
      id="narrative"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#540000]"
    >

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-2 sm:space-y-3">
            <p
              className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-[#E1C49C]`}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
            >
              Our Journey Together
            </p>
            <h2
              className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E1C49C]"
              style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
            >
              Love Story
            </h2>
            <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-[#E1C49C]/95 font-light max-w-xl mx-auto leading-relaxed px-2 mt-2`}>
              A beautiful tale of two hearts finding each other and building forever together
            </p>

            {/* Decorative flourish - Optimized: Removed continuous animation */}
            <div className="flex items-center justify-center gap-3 pt-1 mt-4">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#E1C49C]/60 to-transparent" />
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#E1C49C]/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-[#E1C49C]/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-center lg:items-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Spacer */}
          <div className="hidden lg:block"></div>

          {/* Interactive Stack Component - Center */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Optimized glow effect - reduced layers and blur intensity */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FADDE0]/30 via-[#E9D5C3]/20 to-[#F7E6CA]/25 rounded-full blur-2xl -z-10 w-full h-full max-w-sm" style={{ willChange: 'transform' }} />

              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 240, height: 280 }}
                cardsData={[
                  { id: 1, img: "/mobile-background/couple (1).webp" },
                  { id: 2, img: "/mobile-background/couple (2).webp" },
                  { id: 3, img: "/mobile-background/couple (3).webp" },

                ]}
                animationConfig={{ stiffness: 260, damping: 20 }}
              />

              <motion.p 
                className="text-center text-xs md:text-sm text-white mt-4 font-sans font-medium tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="text-[#E9D5C3]">✨</span> Drag to explore our moments <span className="text-[#E9D5C3]">✨</span>
              </motion.p>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block"></div>
        </motion.div>

        {/* Story Text + Tabs */}
        <motion.div 
          className="mt-10 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <div id="story-panel" className="space-y-4 md:space-y-6" aria-live="polite">
            {storyParagraphs.map((paragraph, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* First paragraph with drop cap */}
                {index === 0 ? (
                  <p className="text-sm md:text-base leading-relaxed text-white/95 text-pretty font-sans font-light pl-3 md:pl-6">
                    <span className="float-left text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-none mr-2 mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)]">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                ) : (
                  <p className="text-sm md:text-base leading-relaxed text-white/95 text-pretty font-sans font-light pl-3 md:pl-6">
                    {paragraph}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider and CTA */}
          <motion.div 
            className="mt-10 md:mt-14 space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative divider - Optimized: Removed continuous rotation */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E1C49C]/60 to-transparent" />
              <svg className="w-5 h-5 text-[#E1C49C]/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#E1C49C]/60 to-transparent" />
            </div>

            {/* Optimized CTA Button - Reduced animations and effects */}
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className="group relative w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-[#51080F] font-sans font-bold text-sm sm:text-base md:text-lg rounded-[2rem] transition-all duration-300 text-center overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#E1C49C] hover:border-[#E1C49C]/80 bg-gradient-to-br from-[#E1C49C] to-[#F5DEB4] hover:from-[#F5DEB4] hover:to-[#E1C49C]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform' }}
              >
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Single shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {/* Button content */}
                <span className="relative z-10 tracking-wide uppercase inline-flex items-center gap-3 font-bold text-[#51080F]">
                  Join Our Celebration
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-[#51080F] transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Decorative corner ornaments */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 scale-0 group-hover:scale-100" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 scale-0 group-hover:scale-100" />
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 scale-0 group-hover:scale-100" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
