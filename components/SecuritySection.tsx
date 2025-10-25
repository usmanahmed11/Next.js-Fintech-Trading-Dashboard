'use client';

import { Shield, Lock, FileCheck, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const securityFeatures = [
  {
    icon: Shield,
    title: 'KYC/AML Compliant',
    description: 'Fully verified and regulated identity verification',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Lock,
    title: 'Cold Wallet Custody',
    description: '95% of funds secured in offline cold storage',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: FileCheck,
    title: 'Insurance Protection',
    description: '$500M coverage on digital assets',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Eye,
    title: 'Real-Time Auditing',
    description: 'Continuous blockchain verification and monitoring',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
];

export function SecuritySection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Security & Trust</h2>
        <p className="text-sm text-muted-foreground">
          Enterprise-grade security protecting your investments 24/7
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg border border-primary/20 bg-primary/5 text-center">
        <p className="text-sm text-foreground/90">
          <span className="font-semibold text-primary">Regulated & Licensed</span> by financial authorities in multiple jurisdictions. Your security is our priority.
        </p>
      </div>
    </section>
  );
}
