import React, { useState } from 'react';
import { Check, Copy, AlertCircle, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data/profile';
import { SpotlightCard, Magnetic } from './MotionComponents';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a detailed message (at least 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(`[Project Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Ahammed Najad KK Portfolio`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `To: ${profileData.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
      ).catch(() => {});
    }

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmittedStatus('sent');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <SpotlightCard className="rounded-2xl border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] p-6 sm:p-10 shadow-elevated">
      
      {/* Form Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDDED8] dark:border-[#20262B]">
        <div>
          <h3 className="text-lg font-semibold text-[#121513] dark:text-[#F3F4F6]">Direct Inquiry Form</h3>
          <p className="text-xs text-[#636966] dark:text-[#9CA3AF] mt-0.5">Dispatches through your local mail client with pre-formatted payload.</p>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8F7F4] dark:bg-[#181C20] border border-[#DDDED8] dark:border-[#20262B] text-xs font-mono text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors"
          title="Copy email address"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399]" />
              <span className="text-[#1F6B47] dark:text-[#34D399] font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {submittedStatus === 'sent' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs text-emerald-700 dark:text-emerald-300"
          >
            <Check className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Email client opened & payload copied to clipboard!</p>
              <p className="mt-0.5 text-emerald-600/90 dark:text-emerald-400/90">If your mail app didn't open automatically, you can paste the pre-copied message directly to <strong>{profileData.email}</strong>.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        
        {/* Name & Email Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF]">
              Your Name <span className="text-[#1F6B47] dark:text-[#34D399]">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full px-4 py-3 rounded-lg text-xs font-mono bg-[#F8F7F4] dark:bg-[#181C20] border ${
                errors.name 
                  ? 'border-red-500/80 focus:border-red-500' 
                  : 'border-[#DDDED8] dark:border-[#20262B] focus:border-[#1F6B47] dark:focus:border-[#34D399]'
              } text-[#121513] dark:text-[#F3F4F6] placeholder-[#636966]/60 dark:placeholder-[#9CA3AF]/40 outline-none transition-colors`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF]">
              Email Address <span className="text-[#1F6B47] dark:text-[#34D399]">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@company.com"
              className={`w-full px-4 py-3 rounded-lg text-xs font-mono bg-[#F8F7F4] dark:bg-[#181C20] border ${
                errors.email 
                  ? 'border-red-500/80 focus:border-red-500' 
                  : 'border-[#DDDED8] dark:border-[#20262B] focus:border-[#1F6B47] dark:focus:border-[#34D399]'
              } text-[#121513] dark:text-[#F3F4F6] placeholder-[#636966]/60 dark:placeholder-[#9CA3AF]/40 outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF]">
            Inquiry Subject <span className="text-[#1F6B47] dark:text-[#34D399]">*</span>
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Full-Stack Developer Opportunity / CRM Consultation"
            className={`w-full px-4 py-3 rounded-lg text-xs font-mono bg-[#F8F7F4] dark:bg-[#181C20] border ${
              errors.subject 
                ? 'border-red-500/80 focus:border-red-500' 
                : 'border-[#DDDED8] dark:border-[#20262B] focus:border-[#1F6B47] dark:focus:border-[#34D399]'
            } text-[#121513] dark:text-[#F3F4F6] placeholder-[#636966]/60 dark:placeholder-[#9CA3AF]/40 outline-none transition-colors`}
          />
          {errors.subject && (
            <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF]">
            Project Scope or Message <span className="text-[#1F6B47] dark:text-[#34D399]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your project scope, technical requirements, timeline, or team structure..."
            className={`w-full px-4 py-3 rounded-lg text-xs font-mono bg-[#F8F7F4] dark:bg-[#181C20] border ${
              errors.message 
                ? 'border-red-500/80 focus:border-red-500' 
                : 'border-[#DDDED8] dark:border-[#20262B] focus:border-[#1F6B47] dark:focus:border-[#34D399]'
            } text-[#121513] dark:text-[#F3F4F6] placeholder-[#636966]/60 dark:placeholder-[#9CA3AF]/40 outline-none transition-colors resize-y`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between">
          <Magnetic strength={12}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Preparing Dispatch...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </Magnetic>

          <span className="text-[11px] font-mono text-[#636966] dark:text-[#9CA3AF] hidden sm:inline">
            Direct &bull; No middleman
          </span>
        </div>

      </form>
    </SpotlightCard>
  );
}
