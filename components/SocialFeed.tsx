'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, Badge, Users, TrendingUp, Hash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockSocialPosts, mockTopTraders, trendingTopics } from '@/lib/mock-data';

export function SocialFeed() {
  const [posts] = useState(mockSocialPosts);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Community Feed</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/30">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-semibold">
                        {post.author.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{post.author.name}</span>
                        {post.author.verified && (
                          <Badge className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.author.followers.toLocaleString()} followers</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/90 leading-relaxed">{post.content}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.comments}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.shares}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Top Traders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTopTraders.map((trader, index) => (
                <div
                  key={trader.name}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="h-8 w-8 border border-primary/30">
                      <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/10 text-primary text-xs font-semibold">
                        {trader.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{trader.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {trader.followers.toLocaleString()} followers
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-green-500">+{trader.roi}%</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Hash className="h-4 w-4 text-primary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic) => (
                <div
                  key={topic.tag}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-semibold text-primary">#{topic.tag}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {(topic.posts / 1000).toFixed(1)}k posts
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
