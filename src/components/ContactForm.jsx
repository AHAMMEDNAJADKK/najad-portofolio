import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, ArrowRight } from 'lucide-react';
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

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#24D18A', '#EDEDEA', '#8E9892']
    });

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('sent');
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-[#101412] border border-[#1C2420] rounded-2xl p-6 sm:p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1C2420]">
        <div>
          <h3 className="text-base font-semibold text-[#EDEDEA]">Send Message</h3>
          <p className="text-xs text-[#8E9892] mt-0.5">Launches your default mail client with formatted message.</p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#080A09] border border-[#1C2420] text-xs font-mono text-[#8E9892] hover:text-[#EDEDEA] hover:border-[#28362F] transition-colors"
          title="Copy email address"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#24D18A]" />
              <span className="text-[#24D18A]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {submittedStatus === 'sent' && (
        <div className="mb-6 p-4 rounded bg-[#080A09] border border-[#24D18A]/40 flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#24D18A] flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-semibold text-[#EDEDEA]">Mail Client Triggered & Text Copied</p>
            <p className="text-[#8E9892]">
              Your inquiry has been copied to clipboard and loaded into your mail client. Direct address: <code className="text-[#24D18A] font-mono">{profileData.email}</code>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-[#5A635E] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full px-3.5 py-2.5 rounded bg-[#080A09] border text-xs sm:text-sm text-[#EDEDEA] placeholder-[#5A635E] focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#1C2420] focus:border-[#24D18A]'
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
            <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-[#5A635E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              className={`w-full px-3.5 py-2.5 rounded bg-[#080A09] border text-xs sm:text-sm text-[#EDEDEA] placeholder-[#5A635E] focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#1C2420] focus:border-[#24D18A]'
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

        <div>
          <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-[#5A635E] mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Full-Stack Development Project"
            className={`w-full px-3.5 py-2.5 rounded bg-[#080A09] border text-xs sm:text-sm text-[#EDEDEA] placeholder-[#5A635E] focus:outline-none transition-colors ${
              errors.subject ? 'border-red-500' : 'border-[#1C2420] focus:border-[#24D18A]'
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-[#5A635E] mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Project requirements, timelines, or role details..."
            className={`w-full px-3.5 py-2.5 rounded bg-[#080A09] border text-xs sm:text-sm text-[#EDEDEA] placeholder-[#5A635E] focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-[#1C2420] focus:border-[#24D18A]'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#EDEDEA] text-[#080A09] font-medium text-xs font-mono uppercase tracking-wider hover:bg-white transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Submit Message</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#080A09]" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
