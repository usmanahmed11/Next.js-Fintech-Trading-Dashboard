'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, Download, Upload, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockBalances, type Balance } from '@/lib/mock-data';

function MiniSparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg className="w-full h-12" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />
    </svg>
  );
}

function BalanceCard({ balance }: { balance: Balance }) {
  const [amount, setAmount] = useState(balance.amount);
  const isPositive = balance.change24h >= 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prev) => prev * (1 + (Math.random() - 0.5) * 0.002));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = () => {
    switch (balance.type) {
      case 'main':
        return '💰';
      case 'trading':
        return '📈';
      case 'ai':
        return '🤖';
      case 'mining':
        return '⛏️';
    }
  };

  const getGradient = () => {
    switch (balance.type) {
      case 'main':
        return 'from-cyan-500/10 to-blue-500/10';
      case 'trading':
        return 'from-green-500/10 to-emerald-500/10';
      case 'ai':
        return 'from-purple-500/10 to-pink-500/10';
      case 'mining':
        return 'from-orange-500/10 to-yellow-500/10';
    }
  };

  return (
    <Card className={`relative overflow-hidden border-border/50 bg-gradient-to-br ${getGradient()} hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-sm font-medium text-muted-foreground mb-1">
              {balance.label}
            </CardTitle>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                ${amount.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="text-2xl">{getIcon()}</div>
        </div>

        <div className="flex items-center gap-1 mt-2">
          {isPositive ? (
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          )}
          <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{balance.change24h.toFixed(2)}%
          </span>
          <span className="text-xs text-muted-foreground ml-1">24h</span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="mb-4 opacity-50">
          <MiniSparkline data={balance.sparklineData} />
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 h-8 text-xs bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
            <Download className="h-3 w-3 mr-1" />
            Deposit
          </Button>
          <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
            <Upload className="h-3 w-3 mr-1" />
            Withdraw
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function BalanceCards() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Balance Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {mockBalances.map((balance) => (
          <BalanceCard key={balance.type} balance={balance} />
        ))}
      </div>
    </section>
  );
}
