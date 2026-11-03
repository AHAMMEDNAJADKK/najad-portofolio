import React, { useState } from 'react';
import { Check, Copy, ArrowRight, AlertCircle } from 'lucide-react';
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

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('sent');
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] p-6 sm:p-10 shadow-sm">
      
      {/* Form Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDDED8] dark:border-[#30362F]">
        <div>
          <h3 className="text-base font-semibold text-[#171916] dark:text-[#F2F2EC]">Direct Inquiry Form</h3>
          <p className="text-xs text-[#70736D] dark:text-[#A0A49D] mt-0.5">Dispatches through your local mail client with pre-formatted payload.</p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] text-xs font-mono text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors"
          title="Copy email address"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#315C45] dark:text-[#83A88B]" />
              <span className="text-[#315C45] dark:text-[#83A88B]">Copied</span>
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
        <div className="mb-6 p-4 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#315C45] dark:border-[#83A88B] text-xs space-y-1">
          <p className="font-semibold text-[#171916] dark:text-[#F2F2EC]">Mail client triggered & text copied to clipboard.</p>
          <p className="text-[#70736D] dark:text-[#A0A49D]">
            If your browser did not automatically open your mail app, email directly to <code className="text-[#315C45] dark:text-[#83A88B] font-mono">{profileData.email}</code>.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Elena Rostova"
              className={`w-full px-3.5 py-2.5 rounded-sm bg-[#F5F4F0] dark:bg-[#111311] border text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] placeholder-[#70736D]/60 focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#DDDED8] dark:border-[#30362F] focus:border-[#171916] dark:focus:border-[#F2F2EC]'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. elena@company.com"
              className={`w-full px-3.5 py-2.5 rounded-sm bg-[#F5F4F0] dark:bg-[#111311] border text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] placeholder-[#70736D]/60 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#DDDED8] dark:border-[#30362F] focus:border-[#171916] dark:focus:border-[#F2F2EC]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Full-Stack Development Project Discussion"
            className={`w-full px-3.5 py-2.5 rounded-sm bg-[#F5F4F0] dark:bg-[#111311] border text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] placeholder-[#70736D]/60 focus:outline-none transition-colors ${
              errors.subject ? 'border-red-500' : 'border-[#DDDED8] dark:border-[#30362F] focus:border-[#171916] dark:focus:border-[#F2F2EC]'
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Project requirements, scope, or timeline..."
            className={`w-full px-3.5 py-2.5 rounded-sm bg-[#F5F4F0] dark:bg-[#111311] border text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] placeholder-[#70736D]/60 focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-[#DDDED8] dark:border-[#30362F] focus:border-[#171916] dark:focus:border-[#F2F2EC]'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
