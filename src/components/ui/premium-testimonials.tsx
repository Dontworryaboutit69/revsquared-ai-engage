import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Chris Elliott",
    role: "Owner, Radiant Security",
    company: "Radiant Security",
    avatar: "/lovable-uploads/758b4181-2dae-445d-b017-caa9eb8f065e.png",
    rating: 5,
    text: "RevSquared's AI agents completely revolutionized how we handle sales and tech support. Our response time improved dramatically, sales conversion rates increased, and we now have 24/7 support available. Game-changing technology.",
    results: ["Faster response times", "Higher conversions", "24/7 availability"]
  },
  {
    name: "John Martinez",
    role: "CEO, Solar Solutions Inc",
    company: "Solar Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "RevSquared AI transformed our lead qualification process. We're closing 40% more deals and our team loves not having to chase cold leads anymore. The voice agents sound incredibly natural.",
    results: ["40% more closes", "Better lead quality", "Natural conversations"]
  },
  {
    name: "Sarah Chen",
    role: "Operations Director, Home Services Pro",
    company: "Home Services Pro",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Our AI agents handle 200+ calls daily without missing a beat. Customer satisfaction is up 35% and we never lose another lead to missed calls. It's like having a perfect receptionist 24/7.",
    results: ["200+ daily calls", "35% satisfaction boost", "Zero missed leads"]
  },
  {
    name: "Mike Rodriguez",
    role: "Founder, Roofing Experts",
    company: "Roofing Experts",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The SMS follow-up system is incredible. Our appointment show-rate increased from 60% to 85%. The AI knows exactly what to say and when to say it. Best ROI we've ever seen.",
    results: ["85% show rate", "Automated follow-ups", "Best ROI ever"]
  },
  {
    name: "Lisa Thompson",
    role: "VP Sales, Business Capital",
    company: "Business Capital",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "RevSquared's outbound agents book 3x more appointments than our human team ever did. The consistency is amazing - every prospect gets the same high-quality experience.",
    results: ["3x more appointments", "Perfect consistency", "Higher conversion"]
  },
  {
    name: "David Kim",
    role: "Owner, Security Solutions",
    company: "Security Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Technical support calls used to drain our resources. Now our AI handles 80% of support tickets perfectly, and our customers are happier than ever. Game-changing technology.",
    results: ["80% automated support", "Happier customers", "Resource savings"]
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#0D0D0D] text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/[0.08] via-[#E536C1]/[0.05] to-[#00E5D6]/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#6233EA]/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#E536C1]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${25 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-[#00E5D6]" />
            </motion.div>
            <span className="text-sm font-medium text-white/80" style={{
              fontFamily: 'Audiowide, sans-serif'
            }}>
              ✨ Client Success Stories
            </span>
            <div className="w-2 h-2 bg-[#00E5D6] rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
            style={{
              fontFamily: 'Audiowide, sans-serif'
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Trusted by
            </span>
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5D6] via-[#6233EA] to-[#E536C1]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Industry Leaders
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-[#D3D4FF] max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
            style={{
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Join thousands of businesses already transforming their operations with our premium AI solutions.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-gradient-to-br from-[#20215A]/50 to-[#6233EA]/20 backdrop-blur-xl rounded-3xl border border-[#00E5D6]/30 p-8 md:p-12 overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/[0.08] via-[#E536C1]/[0.05] to-[#00E5D6]/[0.08] rounded-3xl"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '300% 300%'
                    }}
                  />

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-[#FEDD4D]" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    {/* User Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#00E5D6]/30 relative">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/20 to-[#E536C1]/20"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>
                        
                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 border-[#00E5D6]/30 rounded-full"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-2" style={{
                        fontFamily: 'Audiowide, sans-serif'
                      }}>
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#00E5D6] mb-1 font-medium" style={{
                        fontFamily: 'Manrope, sans-serif'
                      }}>
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-[#D3D4FF] mb-4" style={{
                        fontFamily: 'Manrope, sans-serif'
                      }}>
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star className="w-5 h-5 fill-[#FEDD4D] text-[#FEDD4D]" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.blockquote 
                        className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                          fontFamily: 'Manrope, sans-serif'
                        }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      {/* Results */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-[#20215A]/30 rounded-lg p-3 border border-[#00E5D6]/20 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                          >
                            <span className="text-sm text-[#D3D4FF] font-medium" style={{
                              fontFamily: 'Manrope, sans-serif'
                            }}>
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm text-[#00E5D6] hover:bg-[#00E5D6]/20 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 229, 214, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#00E5D6] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm text-[#00E5D6] hover:bg-[#00E5D6]/20 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 229, 214, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {[
            { number: "45+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "$2M+", label: "Revenue Generated" },
            { number: "99.9%", label: "Uptime SLA" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00E5D6] to-[#E536C1] bg-clip-text text-transparent mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                style={{
                  fontFamily: 'Audiowide, sans-serif'
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-[#D3D4FF] text-sm font-medium group-hover:text-white/80 transition-colors" style={{
                fontFamily: 'Manrope, sans-serif'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
