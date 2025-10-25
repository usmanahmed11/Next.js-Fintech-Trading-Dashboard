'use client';

import { BarChart3, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockPerformanceData } from '@/lib/mock-data';

export function PerformanceSection() {
  const totalPnL = mockPerformanceData.reduce((sum, item) => sum + item.total, 0);
  const avgDailyReturn = (totalPnL / mockPerformanceData.length).toFixed(2);
  const bestDay = Math.max(...mockPerformanceData.map(d => d.total));
  const winRate = 87.5;

  const portfolioData = [
    { name: 'Trading', value: 48, color: 'bg-green-500' },
    { name: 'AI Bots', value: 32, color: 'bg-purple-500' },
    { name: 'Mining', value: 20, color: 'bg-yellow-500' },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Tabs defaultValue="week" className="w-auto">
            <TabsList className="bg-secondary">
              <TabsTrigger value="today" className="text-xs">Today</TabsTrigger>
              <TabsTrigger value="week" className="text-xs">Week</TabsTrigger>
              <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
              <TabsTrigger value="custom" className="text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                Custom
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="all" className="w-auto">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
              <TabsTrigger value="trading" className="text-xs">Trading</TabsTrigger>
              <TabsTrigger value="ai" className="text-xs">AI Bots</TabsTrigger>
              <TabsTrigger value="mining" className="text-xs">Mining</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+${totalPnL.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Last 7 days</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Daily Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">${avgDailyReturn}</div>
            <p className="text-xs text-muted-foreground mt-1">Per trading day</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{winRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">Success ratio</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Best Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">${bestDay.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Peak performance</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Portfolio Allocation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Total Assets</p>
                  <p className="text-lg font-bold text-foreground mt-1">$224,952</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">7d Growth</p>
                  <p className="text-lg font-bold text-green-500 mt-1">+8.2%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ROI</p>
                  <p className="text-lg font-bold text-foreground mt-1">24.5%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base">Weekly Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockPerformanceData.slice(-5).map((day, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-500">+${day.total}</p>
                  <p className="text-xs text-muted-foreground">profit</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
