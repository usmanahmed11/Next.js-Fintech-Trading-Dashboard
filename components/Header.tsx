'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockMarketTickers } from '@/lib/mock-data';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tickers, setTickers] = useState(mockMarketTickers);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((ticker) => ({
          ...ticker,
          price: ticker.price * (1 + (Math.random() - 0.5) * 0.001),
          change24h: ticker.change24h + (Math.random() - 0.5) * 0.2,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/40 bg-card/30 px-4 py-2 overflow-hidden">
        <div className="flex items-center gap-6">
          {tickers.map((ticker, index) => (
            <div key={`${ticker.symbol}-${index}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm font-semibold text-foreground">{ticker.pair}</span>
              <span className="text-sm font-mono text-foreground/90">
                ${ticker.price.toFixed(ticker.symbol === 'BTC' || ticker.symbol === 'ETH' ? 2 : 4)}
              </span>
              <span
                className={`text-xs font-medium ${
                  ticker.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {ticker.change24h >= 0 ? '+' : ''}
                {ticker.change24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              TradeFusion
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trading
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AI Bots
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Mining
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Help
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-card/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trading
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              AI Bots
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Mining
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Help
            </a>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Logout
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
