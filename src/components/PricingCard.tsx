import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  features: PricingFeature[];
  popular?: boolean;
  onSelectPlan: () => void;
}

export function PricingCard({
  title,
  price,
  period,
  features,
  popular = false,
  onSelectPlan,
}: PricingCardProps) {
  return (
    <div
      className={`neon-border glass-card relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
        popular ? 'animate-glow' : ''
      }`}
    >
      <div className="p-8">
        {popular && (
          <span className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-[#740000] to-red-900 px-12 py-1 text-sm font-semibold text-white shadow-lg">
            Best Value
          </span>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold text-red-100">{title}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold text-[#740000]">${price}</span>
            <span className="ml-1 text-xl text-[#740000]/70">/{period}</span>
          </div>
          <p className="mt-2 text-red-200/70">One-time payment</p>
        </div>

        <ul className="mb-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="glass-effect rounded-full p-1">
                <Check className="h-4 w-4 text-[#ffff]" />
              </div>
              <span className="text-red-100">{feature.text}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onSelectPlan}
          className="glass-button w-full rounded-lg px-4 py-4 text-center text-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#740000]/25"
        >
          Get Lifetime Access (5$)
        </button>
      </div>
    </div>
  );
}
