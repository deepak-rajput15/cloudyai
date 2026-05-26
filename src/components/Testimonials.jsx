import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CTO, TechNova',
    content: 'cloudyai transformed our legacy PHP monolith into a sleek, high-performance Laravel microservices architecture. The velocity and quality were unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartupFlow',
    content: 'Their React Native mobile team delivered our app in half the expected time. The UI is stunning and the performance feels completely native.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Roberts',
    role: 'Director of Growth, E-Corp',
    content: 'The SEO optimization applied to our new React frontend boosted our organic traffic by 150% within three months. Exceptional work.',
    rating: 5
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <h2 className="section-title font-serif">Client <span className="text-gradient">Success</span></h2>
        <p className="section-subtitle">
          Don't just take our word for it. See what our partners say about our engineering quality.
        </p>
      </div>

      <motion.div 
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            variants={cardVariants}
            className="testimonial-card glass-panel"
          >
            <Quote className="quote-icon" size={40} />
            
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="star-icon" fill="currentColor" />
              ))}
            </div>
            
            <p className="testimonial-content">"{testimonial.content}"</p>
            
            <div className="testimonial-author">
              <div className="author-avatar font-serif">
                {testimonial.name.charAt(0)}
              </div>
              <div className="author-info">
                <h5 className="author-name">{testimonial.name}</h5>
                <span className="author-role font-mono">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
