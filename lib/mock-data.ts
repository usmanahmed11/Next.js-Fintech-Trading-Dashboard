export interface Balance {
  type: 'main' | 'trading' | 'ai' | 'mining';
  label: string;
  amount: number;
  currency: string;
  change24h: number;
  sparklineData: number[];
}

export interface MarketTicker {
  symbol: string;
  pair: string;
  price: number;
  change24h: number;
}

export interface PerformanceData {
  date: string;
  trading: number;
  ai: number;
  mining: number;
  total: number;
}

export interface SocialPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
    followers: number;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export interface TradingBot {
  id: string;
  name: string;
  description: string;
  roi: number;
  risk: 'low' | 'medium' | 'high';
  status: 'active' | 'paused' | 'backtesting';
  subscribers: number;
  winRate: number;
}

export interface MiningStats {
  hashRate: number;
  hashRateUnit: string;
  uptime: number;
  currentReward: number;
  rewardCurrency: string;
  dailyEarnings: number[];
  machines: number;
}

export interface TopTrader {
  name: string;
  avatar: string;
  roi: number;
  followers: number;
}

export const mockBalances: Balance[] = [
  {
    type: 'main',
    label: 'Main Balance',
    amount: 125840.50,
    currency: 'USD',
    change24h: 5.8,
    sparklineData: [100, 105, 102, 110, 108, 115, 120, 125],
  },
  {
    type: 'trading',
    label: 'Trading Balance',
    amount: 48320.75,
    currency: 'USD',
    change24h: 12.3,
    sparklineData: [40, 42, 45, 43, 46, 47, 48, 48.3],
  },
  {
    type: 'ai',
    label: 'AI Trading Balance',
    amount: 32150.20,
    currency: 'USD',
    change24h: 8.7,
    sparklineData: [28, 29, 30, 29.5, 31, 31.5, 32, 32.15],
  },
  {
    type: 'mining',
    label: 'Mining Balance',
    amount: 18640.80,
    currency: 'USD',
    change24h: 3.2,
    sparklineData: [15, 16, 16.5, 17, 17.5, 18, 18.3, 18.64],
  },
];

export const mockMarketTickers: MarketTicker[] = [
  { symbol: 'BTC', pair: 'BTC/USD', price: 64250.50, change24h: 4.2 },
  { symbol: 'ETH', pair: 'ETH/USD', price: 3180.75, change24h: -2.1 },
  { symbol: 'EUR', pair: 'EUR/USD', price: 1.0875, change24h: 0.3 },
  { symbol: 'GBP', pair: 'GBP/USD', price: 1.2640, change24h: -0.5 },
  { symbol: 'SOL', pair: 'SOL/USD', price: 142.30, change24h: 8.6 },
  { symbol: 'XRP', pair: 'XRP/USD', price: 0.5280, change24h: 1.9 },
];

export const mockPerformanceData: PerformanceData[] = [
  { date: '2025-10-18', trading: 1200, ai: 800, mining: 400, total: 2400 },
  { date: '2025-10-19', trading: 1500, ai: 950, mining: 420, total: 2870 },
  { date: '2025-10-20', trading: 1100, ai: 1100, mining: 450, total: 2650 },
  { date: '2025-10-21', trading: 1800, ai: 1200, mining: 480, total: 3480 },
  { date: '2025-10-22', trading: 1650, ai: 1050, mining: 500, total: 3200 },
  { date: '2025-10-23', trading: 2100, ai: 1300, mining: 520, total: 3920 },
  { date: '2025-10-24', trading: 1900, ai: 1450, mining: 550, total: 3900 },
  { date: '2025-10-25', trading: 2300, ai: 1600, mining: 580, total: 4480 },
];

export const mockSocialPosts: SocialPost[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      avatar: 'SC',
      verified: true,
      followers: 12500,
    },
    content: 'Just closed a massive position on BTC/USD with +18% gains using the Momentum AI bot. The algo caught the breakout perfectly at $62k support level!',
    timestamp: '2 hours ago',
    likes: 324,
    comments: 48,
    shares: 29,
    tags: ['BTC', 'AITrading', 'Momentum'],
  },
  {
    id: '2',
    author: {
      name: 'Marcus Rivera',
      avatar: 'MR',
      verified: true,
      followers: 8900,
    },
    content: 'Mining rewards hitting new highs this week! Hash rate optimization is paying off big time. Up 25% from last month.',
    timestamp: '5 hours ago',
    likes: 189,
    comments: 31,
    shares: 15,
    tags: ['Mining', 'Crypto'],
  },
  {
    id: '3',
    author: {
      name: 'Elena Volkov',
      avatar: 'EV',
      verified: false,
      followers: 3200,
    },
    content: 'EUR/USD looking bullish on the 4H chart. ECB policy shift could push it to 1.10 by end of month. Entered long position.',
    timestamp: '8 hours ago',
    likes: 156,
    comments: 22,
    shares: 11,
    tags: ['Forex', 'EUR'],
  },
];

export const mockTradingBots: TradingBot[] = [
  {
    id: '1',
    name: 'Quantum Scalper',
    description: 'High-frequency scalping bot optimized for volatile markets',
    roi: 24.5,
    risk: 'medium',
    status: 'active',
    subscribers: 1842,
    winRate: 68,
  },
  {
    id: '2',
    name: 'AI Trend Master',
    description: 'ML-powered trend following with adaptive stop-loss',
    roi: 42.8,
    risk: 'low',
    status: 'active',
    subscribers: 3204,
    winRate: 74,
  },
  {
    id: '3',
    name: 'Volatility Hunter',
    description: 'Captures profits during high volatility events',
    roi: 38.2,
    risk: 'high',
    status: 'active',
    subscribers: 982,
    winRate: 61,
  },
  {
    id: '4',
    name: 'Grid Arbitrage',
    description: 'Multi-exchange arbitrage with grid trading strategy',
    roi: 18.7,
    risk: 'low',
    status: 'active',
    subscribers: 2156,
    winRate: 82,
  },
];

export const mockMiningStats: MiningStats = {
  hashRate: 245.8,
  hashRateUnit: 'TH/s',
  uptime: 98.7,
  currentReward: 0.0342,
  rewardCurrency: 'BTC',
  dailyEarnings: [180, 195, 210, 205, 220, 215, 230],
  machines: 12,
};

export const mockTopTraders: TopTrader[] = [
  { name: 'CryptoKing', avatar: 'CK', roi: 156.8, followers: 45200 },
  { name: 'TradeQueen', avatar: 'TQ', roi: 142.3, followers: 38900 },
  { name: 'AlphaWolf', avatar: 'AW', roi: 128.9, followers: 32400 },
  { name: 'DiamondHands', avatar: 'DH', roi: 115.2, followers: 28700 },
];

export const trendingTopics = [
  { tag: 'BTC', posts: 15420 },
  { tag: 'AITrading', posts: 8930 },
  { tag: 'DeFi', posts: 7240 },
  { tag: 'Mining', posts: 5680 },
];
