import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Top slim progress bar that indicates scroll progress
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 origin-left z-50 pointer-events-none opacity-90 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
      style={{ scaleX }}
    />
  );
}

/**
 * Smooth Fade & Slide In Viewport Trigger
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  viewportMargin = '-60px',
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container for Groups
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  className = '',
  viewportMargin = '-60px',
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item for Child Elements
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 20,
  duration = 0.55,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.01 : duration,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Magnetic Button / Wrapper
 */
export function Magnetic({ children, strength = 18, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.4 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Interactive Spotlight Card with Cursor Glow
 */
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(52, 211, 153, 0.08)',
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group card-top-highlight transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Subtle cursor spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500 ease-out z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}

/**
 * Subtle Background Ambience (Grid Pattern + Soft Ambient Radial Lights)
 */
export function BackgroundAmbience() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Faint subtle grid mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Gentle top ambient glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-emerald-500/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* Subtle mid-page ambient touch */}
      <div className="absolute top-[45%] -right-[15%] w-[500px] h-[500px] rounded-full bg-teal-500/[0.02] blur-3xl pointer-events-none" />
    </div>
  );
}

/**
 * Minimalist Custom Cursor (Active only on desktop fine pointer devices)
 */
export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only enable if user has fine pointer (mouse, not touchscreen)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches || shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]')
      );
      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, shouldReduceMotion]);

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-emerald-500/40 dark:border-emerald-400/40 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - (isPointer ? 22 : 14),
          y: mousePosition.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          backgroundColor: isPointer ? 'rgba(52, 211, 153, 0.08)' : 'rgba(52, 211, 153, 0.02)',
          borderColor: isPointer ? 'rgba(52, 211, 153, 0.6)' : 'rgba(52, 211, 153, 0.35)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.2 }}
      />
    </>
  );
}
