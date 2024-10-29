import { Lightbulb, BookOpen, Microscope, Lock } from 'lucide-react';
import { PricingCard } from './components/PricingCard';
import { Gallery } from './components/Gallery';

const plan = {
  title: 'NIDAM Pro License',
  price: 5,
  period: 'year',
  features: [
    { text: 'Summarise Research Docs', included: true },
    { text: 'Engineering Insights & Problem Solving & ', included: true },
    { text: 'Advanced Code Generation', included: true },
    { text: 'Advanced Image Generation', included: true },
    { text: 'Data kept Private', included: true },
  ],
  popular: true,
};

function App() {
  const handlePlanSelection = () => {
    window.location.href = 'https://buy.stripe.com/8wM6q30FW95ve64004';
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#740000] via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] opacity-5 mix-blend-overlay"></div>

      <header className="mx-auto max-w-7xl px-4 pt-20 text-center relative">
        <div className="mb-4 inline-block glass-effect rounded-full px-4 py-1 text-[#ffff]">
          NIDAM
        </div>
        <h1 className="mb-4 bg-gradient-to-r from-[#ffff] via-red-900 to-[#EAA17F] bg-clip-text text-6xl font-bold text-transparent animate-gradient">
          Accelerate Your Innovation
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-red-100/80">
          Transform the way you innovate with NIDAM
        </p>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BookOpen,
              title: 'Research Analysis',
              description: 'Deep analysis of technical papers',
            },
            {
              icon: Lightbulb,
              title: 'Innovation Engine',
              description:
                'Programmed to help develop new ideas through Analysis, Image Generation and Code Generation',
            },
            {
              icon: Microscope,
              title: 'Technical Insights',
              description: 'Solve new problems based on established research',
            },
            {
              icon: Lock,
              title: 'Data kept Private',
              description: 'No selling data to third-parties',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:animate-glow"
            >
              <feature.icon className="mb-4 h-8 w-8 text-[#740000]" />
              <h3 className="mb-2 text-lg font-semibold text-red-100">
                {feature.title}
              </h3>
              <p className="text-red-200/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </header>

      <Gallery />

      <div className="mx-auto mb-20 flex justify-center px-4">
        <div className="w-full max-w-md">
          <PricingCard {...plan} onSelectPlan={handlePlanSelection} />
        </div>
      </div>
    </div>
  );
}

export default App;
