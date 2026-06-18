import { type ComponentType } from "react";

import { Card } from "./Card";
import { Para } from "./Para";

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group p-6 transition hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-50 text-mint-600 ring-1 ring-mint-500/20 transition group-hover:bg-mint-100 group-hover:text-navy-900">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <Para className="mt-3 text-sm">{description}</Para>
    </Card>
  );
}
