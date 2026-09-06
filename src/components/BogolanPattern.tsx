import { motion } from 'motion/react';

interface BogolanPatternProps {
  className?: string;
  variant?: 'inline' | 'watermark' | 'divider' | 'card';
  color?: string;
}

export const BogolanPattern = ({
  className = "",
  variant = "inline",
  color = "#C08A2E",
}: BogolanPatternProps) => {
  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#7A5B45]" />
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-75"
        >
          <motion.path
            d="M4 12L12 4L20 12L12 20L4 12Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="2"
            fill={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <motion.path
            d="M28 12L36 4L44 12L36 20L28 12Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx="36"
            cy="12"
            r="2"
            fill={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          />
          <line x1="20" y1="12" x2="28" y2="12" stroke="#7A5B45" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#7A5B45]" />
      </div>
    );
  }

  if (variant === "watermark") {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
      >
        <circle cx="80" cy="80" r="70" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
        <circle cx="80" cy="80" r="50" stroke={color} strokeWidth="1.5" opacity="0.2" />
        <circle cx="80" cy="80" r="30" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
        <rect x="60" y="60" width="40" height="40" transform="rotate(45 80 80)" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <circle cx="80" cy="80" r="5" fill={color} opacity="0.35" />
      </svg>
    );
  }

  // Feature line-draw SVG motif inspired by Adinkra & Bogolan geometry
  return (
    <div className={`relative ${className}`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[180px]"
      >
        {/* Outer Concentric Circles */}
        <motion.circle
          cx="90"
          cy="90"
          r="80"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="90"
          cy="90"
          r="64"
          stroke="#B8472E"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Inner Diamond / Bogolan Geometry */}
        <motion.polygon
          points="90,36 144,90 90,144 36,90"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Diagonal Cross & Rays */}
        <motion.line
          x1="52"
          y1="52"
          x2="128"
          y2="128"
          stroke="#7A5B45"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
        />
        <motion.line
          x1="128"
          y1="52"
          x2="52"
          y2="128"
          stroke="#7A5B45"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
        />

        {/* Center Sun Core */}
        <motion.circle
          cx="90"
          cy="90"
          r="16"
          fill="#2B211B"
          stroke={color}
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
        />
        <motion.circle
          cx="90"
          cy="90"
          r="6"
          fill="#B8472E"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.0 }}
        />
      </svg>
    </div>
  );
};
