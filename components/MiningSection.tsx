'use client';

import { useState, useEffect } from 'react';
import { Pickaxe, Cpu, Activity, Zap, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockMiningStats } from '@/lib/mock-data';

export function MiningSection() {
  const [hashRate, setHashRate] = useState(mockMiningStats.hashRate);
  const [currentReward, setCurrentReward] = useState(mockMiningStats.currentReward);

  useEffect(() => {
    const interval = setInterval(() => {
      setHashRate((prev) => prev * (1 + (Math.random() - 0.5) * 0.02));
      setCurrentReward((prev) => prev * (1 + (Math.random() - 0.5) * 0.01));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const earningsData = mockMiningStats.dailyEarnings.map((value, index) => ({
    day: `Day ${index + 1}`,
    earnings: value,
  }));

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Pickaxe className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Crypto Mining</h2>
        <span className="text-sm text-muted-foreground ml-2">Real-Time Operations</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="border-border/50 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Hash Rate</CardTitle>
              <Cpu className="h-5 w-5 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">
                  {hashRate.toFixed(1)}
                </span>
                <span className="text-lg text-muted-foreground">{mockMiningStats.hashRateUnit}</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3 text-green-500 animate-pulse" />
                <span className="text-xs text-green-500 font-medium">Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Uptime</CardTitle>
              <Zap className="h-5 w-5 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-foreground">
                {mockMiningStats.uptime}%
              </div>
              <Progress value={mockMiningStats.uptime} className="h-2" />
              <p className="text-xs text-muted-foreground">Last 30 days average</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Reward</CardTitle>
              <DollarSign className="h-5 w-5 text-cyan-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">
                  {currentReward.toFixed(4)}
                </span>
                <span className="text-lg text-muted-foreground">{mockMiningStats.rewardCurrency}</span>
              </div>
              <p className="text-xs text-muted-foreground">Accumulated this period</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Daily Earnings Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {earningsData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-12">{item.day}</span>
                  <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-end px-2"
                      style={{ width: `${(item.earnings / Math.max(...mockMiningStats.dailyEarnings)) * 100}%` }}
                    >
                      <span className="text-xs font-semibold text-white">${item.earnings}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Average Daily</p>
                <p className="text-lg font-bold text-foreground">
                  ${(mockMiningStats.dailyEarnings.reduce((a, b) => a + b, 0) / mockMiningStats.dailyEarnings.length).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Machines</p>
                <p className="text-lg font-bold text-foreground">{mockMiningStats.machines}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Mining Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Mining Machine</h4>
                    <p className="text-xs text-muted-foreground">Own hardware</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Purchase dedicated mining hardware for maximum control and returns
                </p>
                <Button size="sm" className="w-full h-8 text-xs bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Buy Machine
                </Button>
              </div>

              <div className="p-4 rounded-lg border border-border/50 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-500/50 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Mining Pool</h4>
                    <p className="text-xs text-muted-foreground">Join community</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Invest in shared mining pools for consistent passive income
                </p>
                <Button size="sm" variant="outline" className="w-full h-8 text-xs border-green-500/30 text-green-500 hover:bg-green-500/10">
                  <Users className="h-3 w-3 mr-1" />
                  Join Pool
                </Button>
              </div>
            </div>

            <div className="pt-3 border-t border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Profitability</span>
                <span className="text-xs font-semibold text-green-500">High</span>
              </div>
              <Progress value={85} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
