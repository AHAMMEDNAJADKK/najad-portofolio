import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'mailto_opened' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (at least 10 characters).';
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

    // Prepare mailto fallback as per guidelines
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Ahammed Najad Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Also copy to clipboard for user convenience
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `To: ${profileData.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
      ).catch(() => {});
    }

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#24D18A', '#42E39F', '#F5F7F6']
    });

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('mailto_opened');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-[#121A16] border border-[#25342D] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#25342D]">
        <div>
          <h3 className="text-lg font-bold text-[#F5F7F6]">Send a Direct Message</h3>
          <p className="text-xs text-[#A4AEA8]">Opens your default mail app with the formatted message.</p>
        </div>
        
        {/* Quick Email Copy Button */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101613] border border-[#25342D] hover:border-[#24D18A] text-xs font-mono text-[#A4AEA8] hover:text-[#24D18A] transition-colors"
          title="Click to copy email address"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#24D18A]" />
              <span className="text-[#24D18A]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {submittedStatus === 'mailto_opened' && (
        <div className="mb-6 p-4 rounded-xl bg-[#101613] border border-[#24D18A]/50 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#24D18A] flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-semibold text-[#F5F7F6]">Mail client triggered & text copied!</p>
            <p className="text-[#A4AEA8]">
              Your mail app was launched with your inquiry. In case your browser blocked the window, you can also reach me directly at <code className="text-[#24D18A]">{profileData.email}</code>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase text-[#A4AEA8] mb-1.5">
              Your Name <span className="text-[#24D18A]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#101613] border text-sm text-[#F5F7F6] placeholder-[#6C7A73] focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#25342D] focus:border-[#24D18A]'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase text-[#A4AEA8] mb-1.5">
              Email Address <span className="text-[#24D18A]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#101613] border text-sm text-[#F5F7F6] placeholder-[#6C7A73] focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#25342D] focus:border-[#24D18A]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-mono uppercase text-[#A4AEA8] mb-1.5">
            Subject <span className="text-[#24D18A]">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Full-Stack Project Collaboration"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#101613] border text-sm text-[#F5F7F6] placeholder-[#6C7A73] focus:outline-none transition-colors ${
              errors.subject ? 'border-red-500 focus:border-red-500' : 'border-[#25342D] focus:border-[#24D18A]'
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A4AEA8] mb-1.5">
            Message <span className="text-[#24D18A]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project, timeline, or requirements..."
            className={`w-full px-4 py-2.5 rounded-xl bg-[#101613] border text-sm text-[#F5F7F6] placeholder-[#6C7A73] focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#25342D] focus:border-[#24D18A]'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#24D18A] text-[#080B0A] font-semibold text-sm hover:bg-[#1EB878] active:scale-[0.99] transition-all shadow-glow-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Preparing Message...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
