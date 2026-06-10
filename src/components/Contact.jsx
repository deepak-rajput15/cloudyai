import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        console.error("Web3Forms Error:", result);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title font-serif">Let's <span className="text-gradient">Connect</span></h2>
        <p className="section-subtitle">
          Ready to scale your digital presence? Drop us a line and let's engineer something extraordinary.
        </p>
      </div>

      <motion.div 
        className="contact-unified-panel glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact-unified-grid">
          {/* Left Side: Contact Information Sidebar */}
          <div className="contact-sidebar">
            <h3 className="sidebar-title font-serif">Contact Information</h3>
            <p className="sidebar-desc">
              Fill out the form and our engineering team will get back to you within 24 hours.
            </p>
            
            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon-wrap"><Mail size={22} /></div>
                <div>
                  <h5 className="font-mono">EMAIL</h5>
                  <p>Info.cloudyai@gmail.com</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon-wrap"><Phone size={22} /></div>
                <div>
                  <h5 className="font-mono">PHONE</h5>
                  <p>+91 7500620349</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon-wrap"><MapPin size={22} /></div>
                <div>
                  <h5 className="font-mono">LOCATION</h5>
                  <p>Sector 63, Noida<br/>Uttar Pradesh 201301</p>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Glow in Sidebar */}
            <div className="sidebar-glow"></div>
          </div>

          {/* Right Side: Premium Form Area */}
          <div className="contact-form-area">
            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                
                <div className="input-group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>
              
              <div className="input-group">
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">How can we help you?</label>
              </div>
              
              <button 
                type="submit" 
                className={`premium-submit-btn ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : isSubmitted ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    <span className="btn-text">Send Message</span> 
                    <ArrowRight size={20} className="btn-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
