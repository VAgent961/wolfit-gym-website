'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.whatsapp) setWhatsapp(result.whatsapp);

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col w-full pt-20">
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink uppercase tracking-tight mb-8">
                Contact Us
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
                Send us a message to request an appointment or learn more about our memberships.
              </p>
              
              <div className="rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video mb-8">
                <img 
                  src="/images/stitch-4.jpg" 
                  alt="Athletic studio interior" 
                  className="w-full h-full object-cover grayscale opacity-60"
                />
              </div>
            </div>

            <div className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-ink uppercase mb-4">Message Sent!</h2>
                  <p className="text-on-surface-variant mb-8">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <div className="flex flex-col gap-4">
                    {whatsapp && (
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-md font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Send on WhatsApp too
                      </a>
                    )}
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-primary font-bold uppercase tracking-widest text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <div>
                        <p className="font-bold mb-1">Error</p>
                        <p>{error}</p>
                        {whatsapp && (
                          <a
                            href={whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 font-bold underline"
                          >
                            Try via WhatsApp instead
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-background border border-outline-variant/20 rounded-md px-4 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'sending'}
                        className="w-full bg-background border border-outline-variant/20 rounded-md px-4 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        disabled={status === 'sending'}
                        className="w-full bg-background border border-outline-variant/20 rounded-md px-4 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      disabled={status === 'sending'}
                      className="w-full bg-background border border-outline-variant/20 rounded-md px-4 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none disabled:opacity-50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary text-white py-5 rounded-md font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
