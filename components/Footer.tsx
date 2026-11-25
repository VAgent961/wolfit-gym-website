import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-dark border-t border-outline-variant/20 py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/images/logo.jpg" alt="Wolfit Gym logo" className="h-8 w-auto object-contain" />
              <span className="font-heading text-lg font-bold tracking-tight uppercase text-ink">Wolfit Gym</span>
            </Link>
            <p className="text-on-surface-variant max-w-xs leading-relaxed">
              JCPF+C97, Barja, Lebanon.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/wolfitgymtvm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors uppercase text-sm font-bold tracking-widest"
              >
                Instagram
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant/60">
              © 2024 Wolfit Gym. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
