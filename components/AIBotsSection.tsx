'use client';

import { Bot, TrendingUp, Activity, Users, Play, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockTradingBots } from '@/lib/mock-data';

export function AIBotsSection() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'high':
        return 'bg-red-500/20 text-red-500 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Activity className="h-3 w-3 text-green-500 animate-pulse" />;
      case 'paused':
        return <Activity className="h-3 w-3 text-yellow-500" />;
      case 'backtesting':
        return <Activity className="h-3 w-3 text-blue-500" />;
    }
  };

  const getGradientBorder = (index: number) => {
    const gradients = [
      'from-cyan-500 via-blue-500 to-purple-500',
      'from-green-500 via-emerald-500 to-teal-500',
      'from-purple-500 via-pink-500 to-red-500',
      'from-orange-500 via-yellow-500 to-amber-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Bot className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">AI Trading Bots</h2>
        <span className="text-sm text-muted-foreground ml-2">Powered by Machine Learning</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {mockTradingBots.map((bot, index) => (
          <Card
            key={bot.id}
            className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradientBorder(index)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientBorder(index)}`} />

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getGradientBorder(index)} bg-opacity-10`}>
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(bot.status)}
                    <span className="text-xs text-muted-foreground capitalize">{bot.status}</span>
                  </div>
                </div>
                <Badge variant="outline" className={`${getRiskColor(bot.risk)} border`}>
                  {bot.risk.toUpperCase()}
                </Badge>
              </div>

              <CardTitle className="text-lg font-bold text-foreground">{bot.name}</CardTitle>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                {bot.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">ROI</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-lg font-bold text-green-500">+{bot.roi}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Win Rate</span>
                    <span className="text-xs font-semibold text-foreground">{bot.winRate}%</span>
                  </div>
                  <Progress value={bot.winRate} className="h-1.5" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Subscribers</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    {bot.subscribers.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  className={`flex-1 h-8 text-xs bg-gradient-to-r ${getGradientBorder(index)} hover:opacity-90 transition-opacity`}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run Bot
                </Button>
                <Button size="sm" variant="outline" className="h-8 px-3">
                  <Eye className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
          View All AI Bots
          <TrendingUp className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
