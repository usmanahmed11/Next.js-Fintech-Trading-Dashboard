'use client';

import { TrendingUp, Twitter, Send, MessageCircle, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Risk Disclosure', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'API Documentation', href: '#' },
  ],
  products: [
    { label: 'Crypto Trading', href: '#' },
    { label: 'Forex & CFD', href: '#' },
    { label: 'AI Trading Bots', href: '#' },
    { label: 'Mining Pools', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                TradeFusion
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Next-generation trading platform combining crypto, forex, AI automation, and mining investments in one unified ecosystem.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 TradeFusion. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Licensed & Regulated</span>
              <span>•</span>
              <span>SSL Secured</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trading involves risk. Cryptocurrency and CFD trading may not be suitable for all investors. Please ensure you understand the risks involved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
