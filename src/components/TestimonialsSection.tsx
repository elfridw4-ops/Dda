import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="temoignages-section" className="relative py-24 bg-[#2B211B] overflow-hidden border-b border-[#7A5B45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#C08A2E] mb-3 block">
              Avis de nos convives
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F2E9DA]">
              Ce que disent nos <span className="italic-wonky text-[#C08A2E]">clients</span>
            </h2>
          </motion.div>
        </div>

        {/* 2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.33, 0, 0.2, 1] }}
              className="p-8 rounded-2xl bg-[#7A5B45]/15 border border-[#7A5B45]/40 relative flex flex-col justify-between shadow-lg hover:border-[#C08A2E]/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#C08A2E]/30 mb-4" />

              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#C08A2E] mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C08A2E]" />
                ))}
              </div>

              {/* Comment text */}
              <p className="text-base sm:text-lg text-[#F2E9DA]/90 italic font-normal leading-relaxed mb-6">
                "{item.comment}"
              </p>

              {/* User avatar & name */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#7A5B45]/30">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#C08A2E]/40"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display font-semibold text-[#F2E9DA] text-base">{item.name}</h3>
                  <p className="text-xs text-[#C08A2E] font-mono">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
